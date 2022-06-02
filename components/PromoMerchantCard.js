import { formatIndonesianCurrency } from '../utils/string';
import { useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { deletePromo } from '../models/promo';
import { useRouter } from 'next/router';

const PromoMerchantCard = ({ id, code, percentage, maxCut, maxUse, totalUse }) => {

  const router = useRouter();

  const handleDelete = (id) => {
    deletePromo(id).then(() => {
      router.reload();
    });
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body">
        <div className="text-md font-bold text-primary">
          <div className="w-full flex justify-between">
            <span>{code}</span>
            <span>
              <div className="flex justify-center items-center mr-6" onClick={() => handleDelete(id)}>
                <TrashIcon className="cursor-pointer text-neutral w-5" />
              </div>
          </span>
          </div>
        </div>
        <div className="w-full flex gap-[10rem]">
          <div className="w-64 flex justify-between">
            <span>Persentase Diskon:</span>
            <span>{percentage}</span>
          </div>
          <div className="w-64 flex justify-between">
            <span>Jumlah promo terpakai:</span>
            <span>{totalUse}</span>
          </div>
        </div>
        <div className="w-full flex gap-[10rem]">
          <div className="w-64 flex justify-between">
            <span>Potongan Maksimal:</span>
            <span>{formatIndonesianCurrency(maxCut)}</span>
          </div>
          <div className="w-64 flex justify-between">
            <span>Jumlah promo tersisa:</span>
            <span>{maxUse - totalUse}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoMerchantCard;