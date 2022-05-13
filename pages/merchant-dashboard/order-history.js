import Head from "next/head";
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from '../../components/MerchantDashboardDrawer';
import NavbarMerchant from '../../components/NavbarMerchant';
import OrderCard from "../../components/OrderCard";

const OrderHistoryMerchant = () => {
  return (
    <>
      <Head>
        <title>Merchant Dashboard | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <div className="absolute top-0 left-0 w-full">
        <NavbarMerchant />
        <main className="mx-auto max-w-6xl pt-4">
          <Banner title="Merchant Dashboard" />
          <h2 className="my-8 text-2xl font-bold text-center">Order History</h2>
          <OrderCard isMerchant status="Menunggu Konfirmasi" />
          <OrderCard isMerchant status="Dikemas" />
          <OrderCard isMerchant status="Dikirim" />
          <OrderCard isMerchant status="Selesai" />
          <OrderCard isMerchant status="Dibatalkan" />
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default OrderHistoryMerchant;
