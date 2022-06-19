import { BellIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectIsLogin } from "../redux/features/auth";
import ls from "local-storage";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const handleSearch = () => {
    router.push(`/?search=${searchQuery}`);
  };

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
        <Link href="/">
          <div className="cursor-pointer">
            <Image src="/logo.svg" alt="logo" width={54} height={54} />
          </div>
        </Link>
      </div>
      <div className="navbar-center relative">
        <input
          type="text"
          placeholder="Cari barang..."
          className="input input-bordered w-96"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="btn btn-square btn-ghost absolute right-0"
          onClick={handleSearch}
        >
          <SearchIcon className="text-neutral w-6" />
        </button>
      </div>
      <div className="navbar-end">
        <button className="cursor-pointer btn btn-circle btn-ghost">
          <Link href="/user-dashboard/notification">
            <BellIcon className="text-white w-6" />
          </Link>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-circle btn-ghost">
            <MenuIcon className="text-white w-6" />
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/user-dashboard/e-wallet">Dashboard</Link>
            </li>
            <li>
              {isLogin ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
