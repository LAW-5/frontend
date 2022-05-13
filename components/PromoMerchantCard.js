import { formatIndonesianCurrency } from '../utils/string';

const PromoMerchantCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <p className="text-md font-bold text-primary">KODEPROMO</p>
        <div className="w-full flex gap-[10rem]">
          <div className="w-64 flex justify-between">
            <span>Persentase Diskon:</span>
            <span>20%</span>
          </div>
          <div className="w-64 flex justify-between">
            <span>Jumlah promo terpakai:</span>
            <span>120</span>
          </div>
        </div>
        <div className="w-full flex gap-[10rem]">
          <div className="w-64 flex justify-between">
            <span>Potongan Maksimal:</span>
            <span>{formatIndonesianCurrency(100000)}</span>
          </div>
          <div className="w-64 flex justify-between">
            <span>Jumlah promo tersisa:</span>
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoMerchantCard;