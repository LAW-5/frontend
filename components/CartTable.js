import { TrashIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { getProductDetail } from "../models/product";
import { formatIndonesianCurrency } from "../utils/string";
import QuantityInput from "./QuantityInput";

const CartTable = ({ merchantName, cart }) => {
  const [product, setProduct] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const temp = [];
    const qtemp = [];
    cart.map((c) => {
      temp.push(c.productId);
      qtemp.push(c.quantity);
    });
    setProductIds(temp);
    setQuantity(qtemp);
  }, [cart]);

  useEffect(() => {
    if (productIds.length > 0) {
      const fetchProduct = async (productId) => {
        const resProduct = await getProductDetail(productId);
        setProduct([...product, resProduct]);
      };
      setProduct([]);
      productIds.map((id) => {
        fetchProduct(id);
      })
    }
  }, [productIds, quantity]);

  return (
    <table className="table w-full border-2 rounded-lg mb-8">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>{merchantName}</th>
          <th>Harga Satuan</th>
          <th>Kuantitas</th>
          <th>Total Harga</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {product.map((p, index) => (
          <tr key={index}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="w-80">
              <div className="flex items-center">
                <img src={p.imageUrl} width={54} height={54} alt={p.name} />
                <p className="w-72 line-clamp-2 whitespace-normal ml-4">
                  {p.name}
                </p>
              </div>
            </td>
            <td>{formatIndonesianCurrency(p.price)}</td>
            <td>
              <div className="w-fit">
                <QuantityInput quantity={quantity[index]} />
              </div>
            </td>
            <td>{formatIndonesianCurrency(p.price * quantity[index])}</td>
            <td>
              <div className="flex justify-center items-center mr-6">
                <TrashIcon className="text-neutral w-5" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
