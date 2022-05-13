import { ClipboardIcon } from "@heroicons/react/outline";
import { formatIndonesianCurrency } from "../utils/string";

const PromoCard = ({ maxDiscount, discount, code }) => {
  return (
    <div className="card card-compact !pt-4 w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <p className="text-lg font-bold text-red-400">Diskon {discount}%</p>
        <div className="flex justify-start items-center">
          <div className="text-md inline">
            Kode Promo <span className="font-bold">{code}</span>
          </div>
          <button>
            <ClipboardIcon className="text-neutral w-5 ml-2 " />
          </button>
        </div>
        <small>Max. potongan {formatIndonesianCurrency(maxDiscount)}</small>
      </div>
    </div>
  );
};

export default PromoCard;