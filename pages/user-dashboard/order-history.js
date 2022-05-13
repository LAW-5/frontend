import Head from "next/head";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import OrderCard from '../../components/OrderCard';
import UserDashboardDrawer from "../../components/UserDashboardDrawer";

const Notification = () => {
  return (
    <>
      <Head>
        <title>User Dashboard | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
        <main className="mx-auto max-w-6xl pt-4">
          <Banner title="User Dashboard">
            <div className="flex justify-center">
              <label
                htmlFor="user-dashboard-drawer"
                className="mx-auto btn btn-primary rounded-lg mt-4"
              >
                MENU
              </label>
            </div>
          </Banner>
          <h2 className="my-8 text-2xl font-bold text-center">Order History</h2>
          <OrderCard status="Menunggu Konfirmasi" />
          <OrderCard status="Dikemas" />
          <OrderCard status="Dikirim" />
          <OrderCard status="Selesai" />
          <OrderCard status="Dibatalkan" />
        </main>
      </div>
      <UserDashboardDrawer />
    </>
  );
};

export default Notification;
