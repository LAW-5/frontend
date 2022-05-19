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

            <label for="my-modal-4" class="btn btn-primary modal-button rounded-lg mt-8">TOP UP</label>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
              <label class="modal-box relative" for="">
                <h3 class="text-3xl font-bold text-center pt-4">Topup E-Wallet</h3>
                
                <form className="p-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Nominal
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Masukkan nominal"
                      className="input input-bordered !rounded-md w-full"
                    />
                  </label>
                </div>
                <button className="btn btn-primary rounded-lg mx-auto block mt-8">
                  Topup
                </button>
              </form>
              </label>
            </label>
          </div>
        </main>
      </div>
      <UserDashboardDrawer />
    </>
  );
};

export default EWallet;
