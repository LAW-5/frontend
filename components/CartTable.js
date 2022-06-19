import { TrashIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../models/cart";
import { getProductDetail } from "../models/product";
import {
  addOrderData,
  deleteOrderData,
  selectOrderData,
  setOrderData,
} from "../redux/features/order";
import { formatIndonesianCurrency } from "../utils/string";
import QuantityInput from "./QuantityInput";

const CartTable = ({ merchantName, cart }) => {
  const [product, setProduct] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [cartIds, setCartIds] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const temp = [];
    const qtemp = [];
    const ctemp = [];
    cart.map((c) => {
      temp.push(c.productId);
      qtemp.push(c.quantity);
      ctemp.push(c.id);
    });
    setProductIds(temp);
    setQuantity(qtemp);
    setCartIds(ctemp);
  }, [cart]);

  useEffect(() => {
    if (productIds.length > 0) {
      const promises = productIds.map((id) => getProductDetail(id));
      Promise.all(promises).then((res) => setProduct(res));
    }
  }, [productIds]);

  const handleChangeOrderData = (e, p) => {
    if (e.target.checked) {
      dispatch(addOrderData(p));
    } else {
      dispatch(deleteOrderData(p.id));
    }
  };

  const handleDelete = (id, pid) => {
    setProduct(product.filter((p) => p.id !== pid));
    deleteFromCart(id);
  };

  return (
    <table className="table w-full border-2 rounded-lg mb-8">
      <thead>
        <tr>
          <th></th>
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
                <input
                  onChange={(e) =>
                    handleChangeOrderData(e, {
                      ...p,
                      quantity: quantity[index],
                    })
                  }
                  type="checkbox"
                  className="checkbox"
                />
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
                <QuantityInput
                  quantity={quantity[index]}
                  onAdd={() => {
                    if (quantity[index] < p.stock) {
                      const qtemp = [...quantity];
                      qtemp[index] = qtemp[index] + 1;
                      setQuantity(qtemp);
                    }
                  }}
                  onSubstract={() => {
                    if (quantity[index] > 1) {
                      const qtemp = [...quantity];
                      qtemp[index] = qtemp[index] - 1;
                      setQuantity(qtemp);
                    }
                  }}
                />
              </div>
            </td>
            <td>{formatIndonesianCurrency(p.price * quantity[index])}</td>
            <td>
              <div className="flex justify-center items-center mr-6">
                <TrashIcon
                  onClick={() => handleDelete(cartIds[index], p.id)}
                  className="text-neutral w-5 cursor-pointer"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
