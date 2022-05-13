import { formatIndonesianCurrency } from '../utils/string';

const DISABLE_BUTTON_LIST = ["Selesai", "Dibatalkan"];

const OrderCard = ({ status }) => {
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
        {!DISABLE_BUTTON_LIST.includes(status) && (
          <button className="btn btn-primary rounded-lg w-fit mt-2">
            SELESAI
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
