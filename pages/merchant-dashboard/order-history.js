import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from '../../components/MerchantDashboardDrawer';
import NavbarMerchant from '../../components/NavbarMerchant';
import OrderCard from "../../components/OrderCard";
import { getOrderMerchant } from "../../models/order";

const OrderHistoryMerchant = () => {

  const [order, setOrder] = useState();

  useEffect(() => {
    getOrderMerchant().then((res) => {
      setOrder(res.data);
    });
  }, []);

  return ( order &&
    <>
      <Head>
        <title>Merchant Dashboard | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <div className="absolute top-0 left-0 w-full">
        <NavbarMerchant />
        <main className="mx-auto max-w-6xl pt-4">
          <Banner title="Merchant Dashboard" />
          <h2 className="my-8 text-2xl font-bold text-center">Order History</h2>
          {order.map((ord) => (
            <OrderCard isMerchant order={ord} />
          ))}
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default OrderHistoryMerchant;
