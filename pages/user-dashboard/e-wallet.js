import Head from "next/head";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import UserDashboardDrawer from '../../components/UserDashboardDrawer';
import { formatIndonesianCurrency } from '../../utils/string';

const EWallet = () => {
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
          <div className="bg-info-content rounded-sm p-16">
            <h3 className="text-base-300 text-3xl mb-4">
              Saldo E-Wallet
            </h3>
            <p className="text-base-100 text-5xl font-bold">{formatIndonesianCurrency(100000000)}</p>
            <button className="btn btn-primary rounded-lg mt-8">TOP UP</button>
          </div>
        </main>
      </div>
      <UserDashboardDrawer />
    </>
  );
};

export default EWallet;
