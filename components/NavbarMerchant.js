import { MenuIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/features/auth';

const NavbarMerchant = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div className="navbar bg-primary px-8">
      <div className="navbar-start">
        <Link href="/merchant-dashboard/order-history">
          <div className="cursor-pointer">
            <Image src="/logo.svg" alt="logo" width={54} height={54} />
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="merchant-dashboard-drawer"
          className="btn btn-circle btn-ghost"
        >
          <MenuIcon className="text-white w-6" />
        </label>
      </div>
    </div>
  );
};

export default NavbarMerchant;
