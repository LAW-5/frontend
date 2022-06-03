/* eslint-disable @next/next/no-img-element */

import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { formatIndonesianCurrency } from "../utils/string";
import ProductModal from "./ProductModal";

const ProductCard = ({
  id,
  imgUrl,
  name,
  price,
  desc,
  stock,
  isMerchant,
  onEdit,
  onDelete,
}) => {
  const handleDelete = async () => {
    await deleteProduct(id);
  };

  return (
    <div className="p-4 w-[25%]">
      <div className="card w-full bg-base-100 shadow-xl cursor-pointer">
        <Link href={`/product/${id}`}>
          <div>
          <figure>
            <img src={imgUrl} alt={name} />
          </figure>
          <div className="card-body p-4">
            <p className="line-clamp-2 h-12">{name}</p>
            <p className="font-semibold">{formatIndonesianCurrency(price)}</p>
          </div>
          </div>
        </Link>
        <div className="card-body p-4 -mt-4">
          {isMerchant && (
            <>
              <small>
                Sisa stok: <span className="text-accent">120</span>
              </small>
              <div className="flex justify-end">
                <div className="flex">
                  <label htmlFor="edit-modal" className="btn btn-ghost" ><PencilIcon className="text-neutral w-6" /></label>
                  <ProductModal
                    isUpdate={true}
                    modalId="edit-modal"
                    name={name}
                    price={price}
                    desc={desc}
                    stock={stock}
                  />
                  <label className="btn btn-ghost" onClick={handleDelete} >
                    <TrashIcon className="text-neutral w-6" />
                  </label>
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
