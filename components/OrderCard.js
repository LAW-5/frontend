import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { editOrderStatus } from "../models/order";
import { getProductDetail } from "../models/product";
import { formatIndonesianCurrency } from "../utils/string";

const USER_FINISHED_STATUSES = ["Selesai", "Dibatalkan"];
const MERCHANT_FINISHED_STATUSES = ["Dikirim", "Selesai", "Dibatalkan"];

const OrderCard = ({ order, isMerchant }) => {

  const router = useRouter();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  
  useEffect(() => {
    const products = [];
    const fetchProduct = async (productId) => {
      const resProduct = await getProductDetail(productId);
      products.push(resProduct);
      if (products.length == order.productId.length) {
        setProduct(products);
        setIsloading(false);
      }
    };

    
    order.productId.map((id) => {
      fetchProduct(id);
    });
  }, [order]);

  const handleStatus = (status) => {
    editOrderStatus(order.id, status).then(() => router.reload());
  }

  return ( !isLoading &&
    <div className="card w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <p className="font-bold text-primary">{order.orderStatus}</p>
        <small onClick={() => console.log(product)}>Order ID {order.id}</small>
        {product.map((prod, i) => { return (
          <p className="text-lg font-semibold" key={prod.id}>
            {prod.name} ({order.quantity[i]})
          </p>
        )})}
        <p className="text-md font-bold">
          {formatIndonesianCurrency(order.totalPrice)}
        </p>
        <div className="bg-neutral-content rounded-md p-5 mt-2 leading-loose">
          <p className="font-bold">Alamat Pengiriman:</p>
          <p>{order.name}</p>
          <p>{order.address}</p>
        </div>
        {!isMerchant && !USER_FINISHED_STATUSES.includes(order.orderStatus) && (
          <button 
            className="btn btn-primary rounded-lg w-fit mt-2"
            onClick={() => handleStatus("Selesai")}
          >
            SELESAI
          </button>
        )}
        {isMerchant && !MERCHANT_FINISHED_STATUSES.includes(order.orderStatus) && (
          <div className="flex gap-4">
            <button 
              className="btn btn-primary rounded-lg w-fit mt-2"
              onClick={() => handleStatus("Dikirim")}
            >
              PRODUK SIAP DIKIRIM
            </button>
            <button 
              className="btn btn-secondary rounded-lg w-fit mt-2"
              onClick={() => handleStatus("Dibatalkan")}
            >
              BATALKAN PESANAN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
