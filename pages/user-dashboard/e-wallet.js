import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import UserDashboardDrawer from "../../components/UserDashboardDrawer";
import { getBalance, topUpBalance } from "../../models/payment";
import { formatIndonesianCurrency } from "../../utils/string";
import { useForm } from "react-hook-form";

const EWallet = () => {
  const [balance, setBalance] = useState(0);
  const [id, setId] = useState();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getBalance().then((res) => {
      setBalance(res.balance);
      setId(res.id);
    });
  }, []);

  const onSubmit = (data) => {
    topUpBalance({ amount: data.amount, id }).then((res) => {
      alert("Top up berhasil");
      window.location.reload();
    });
  };

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
            <h3 className="text-base-300 text-3xl mb-4">Saldo E-Wallet</h3>
            <p className="text-base-100 text-5xl font-bold">
              {formatIndonesianCurrency(balance)}
            </p>

            <label
              htmlFor="my-modal-4"
              className="btn btn-primary modal-button rounded-lg mt-8"
            >
              TOP UP
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-3xl font-bold text-center pt-4">
                  Topup E-Wallet
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
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
                        required
                        {...register("amount")}
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
