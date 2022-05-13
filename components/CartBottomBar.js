import Link from "next/link";
import { formatIndonesianCurrency } from "../utils/string";

const CartBottomBar = ({ total }) => {
  return (
    <div className="bg-base-100 z-50 w-full fixed bottom-0 shadow-[0_-4px_8px_rgba(0,0,0,0.25)] py-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <p className="text-lg">Total: </p>
            <p className="text-2xl font-bold">
              {formatIndonesianCurrency(total)}
            </p>
          </div>
          <Link href="/order">
            <button className="btn btn-primary rounded-lg mr-8">
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartBottomBar;
