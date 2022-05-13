import Head from "next/head";
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from '../../components/MerchantDashboardDrawer';
import NavbarMerchant from '../../components/NavbarMerchant';
import NotificationCard from '../../components/NotificationCard';

const NotificationMerchant = () => {
  return (
    <>
      <Head>
        <title>Merchant Dashboard | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <div className="absolute top-0 left-0 w-full">
        <NavbarMerchant />
        <main className="mx-auto max-w-6xl pt-4">
          <Banner title="Merchant Dashboard" />            
          <h2 className="my-8 text-2xl font-bold text-center">Notification</h2>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default NotificationMerchant;
