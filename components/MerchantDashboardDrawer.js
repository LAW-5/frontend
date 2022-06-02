import Link from "next/link";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth';

const MerchantDashboardDrawer = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
  <div className="drawer drawer-end">
    <input
      id="merchant-dashboard-drawer"
      type="checkbox"
      className="drawer-toggle"
    />
    <div className="drawer-side top-0">
      <label htmlFor="merchant-dashboard-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <Link href="/merchant-dashboard/product">List Product</Link>
        </li>
        <li>
          <Link href="/merchant-dashboard/order-history">List Order</Link>
        </li>
        <li>
          <Link href="/merchant-dashboard/promo">List Promo</Link>
        </li>
        <li>
          <Link href="/merchant-dashboard/notification">Notification</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
)};

export default MerchantDashboardDrawer;
