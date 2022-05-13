import Link from "next/link";

const UserDashboardDrawer = () => (
  <div className="drawer drawer-end">
    <input
      id="user-dashboard-drawer"
      type="checkbox"
      className="drawer-toggle"
    />
    <div className="drawer-side top-0">
      <label htmlFor="user-dashboard-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <Link href="/user-dashboard/e-wallet">E-Wallet</Link>
        </li>
        <li>
          <Link href="/user-dashboard/order-history">Order history</Link>
        </li>
        <li>
          <Link href="/user-dashboard/notification">Notification</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default UserDashboardDrawer;
