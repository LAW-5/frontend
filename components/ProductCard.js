/* eslint-disable @next/next/no-img-element */

import { formatIndonesianCurrency } from '../utils/string';

const ProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className="p-4 w-[25%]">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={imgUrl} alt={name} />
        </figure>
        <div className="card-body p-4">
          <p className="line-clamp-2 h-12">{name}</p>
          <p className="font-semibold">{formatIndonesianCurrency(price)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;