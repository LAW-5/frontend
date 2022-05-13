import { BellIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
        />
        <button className="btn btn-square btn-ghost absolute right-0">
          <SearchIcon className="text-neutral w-6" />
        </button>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost">
          <BellIcon className="text-white w-6" />
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
              <Link href="/">Cart</Link>
            </li>
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
