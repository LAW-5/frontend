import Link from "next/link";

const MerchantDashboardDrawer = () => (
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
      </ul>
    </div>
  </div>
);

export default MerchantDashboardDrawer;
