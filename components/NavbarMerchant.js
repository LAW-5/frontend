import { MenuIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsLogin } from '../redux/features/auth';
import ls from "local-storage";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NavbarMerchant = () => {
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    const token = ls("token");
    const role = ls("role");
    if (token) {
      dispatch(login());
    }
  }, [dispatch]);

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
