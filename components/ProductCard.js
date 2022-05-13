/* eslint-disable @next/next/no-img-element */

import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { formatIndonesianCurrency } from "../utils/string";

const ProductCard = ({
  id,
  imgUrl,
  name,
  price,
  isMerchant,
  onEdit,
  onDelete,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="p-4 w-[25%]">
        <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
          <figure>
            <img src={imgUrl} alt={name} />
          </figure>
          <div className="card-body p-4">
            <p className="line-clamp-2 h-12">{name}</p>
            <p className="font-semibold">{formatIndonesianCurrency(price)}</p>
            {isMerchant && (
              <>
                <small>
                  Sisa stok: <span className="text-accent">120</span>
                </small>
                <div className="flex justify-end">
                  <div className="flex gap-3">
                    <PencilIcon className="text-neutral w-6" />
                    <TrashIcon className="text-neutral w-6" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
