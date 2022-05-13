import { formatIndonesianCurrency } from "../utils/string";

const USER_FINISHED_STATUSES = ["Selesai", "Dibatalkan"];
const MERCHANT_FINISHED_STATUSES = ["Dikirim", "Selesai", "Dibatalkan"];

const OrderCard = ({ status, isMerchant }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <p className="font-bold text-primary">{status}</p>
        <small>Order ID ABC1234567</small>
        <small>Ordered 10 April 2022</small>
        <p className="text-lg font-semibold">
          MSI GEFORCE RTX 3090 VENTUS 3X 24G OC
        </p>
        <p className="text-md font-bold">
          {formatIndonesianCurrency(15999999)}
        </p>
        <div className="bg-neutral-content rounded-md p-5 mt-2 leading-loose">
          <p className="font-bold">Alamat Pengiriman:</p>
          <p>Bambang Setiabudi</p>
          <p>Jl. Mawar No.7 RT02 RW01, Depok</p>
        </div>
        {!isMerchant && !USER_FINISHED_STATUSES.includes(status) && (
          <button className="btn btn-primary rounded-lg w-fit mt-2">
            SELESAI
          </button>
        )}
        {isMerchant && !MERCHANT_FINISHED_STATUSES.includes(status) && (
          <div className="flex gap-4">
            <button className="btn btn-primary rounded-lg w-fit mt-2">
              PRODUK SIAP DIKIRIM
            </button>
            <button className="btn btn-secondary rounded-lg w-fit mt-2">
              BATALKAN PESANAN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
