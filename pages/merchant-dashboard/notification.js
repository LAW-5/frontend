import Head from "next/head";
import { useEffect, useState } from 'react';
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from "../../components/MerchantDashboardDrawer";
import NavbarMerchant from "../../components/NavbarMerchant";
import NotificationCard from "../../components/NotificationCard";
import { getAllNotification } from '../../models/notification';

const NotificationMerchant = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getAllNotification().then((res) => {
      if (!_.isEmpty(res.data)) {
        setNotifications(res.data);
      }
    });
  }, []);

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
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} {...notification} />
          ))}
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default NotificationMerchant;
