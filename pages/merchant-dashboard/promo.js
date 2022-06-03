import Head from "next/head";
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from "../../components/MerchantDashboardDrawer";
import NavbarMerchant from "../../components/NavbarMerchant";
import PromoMerchantCard from "../../components/PromoMerchantCard";
import { createPromo, getAllPromo } from '../../models/promo';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Promo = () => {
  const { handleSubmit, register } = useForm();
  const [ promo, setPromo ] = useState();

  const router = useRouter();

  const onSubmit = async (data) => {
    await createPromo(data).then(() => {
      router.reload();
    });
  };  

  useEffect(() => {
    getAllPromo().then((res) => {
      setPromo(res.data);
    });
  }, []);

  return ( promo &&
    <>
      <Head>
        <title>Merchant Dashboard | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <div className="absolute top-0 left-0 w-full">
        <NavbarMerchant />
        <main className="mx-auto max-w-6xl pt-4">
          <Banner title="Merchant Dashboard" />
          <h2 className="mt-8 mb-4 text-2xl font-bold text-center">
            List of Promo
          </h2>
          <div className="flex justify-center">
            <label htmlFor="my-modal-4" className="btn btn-primary rounded-lg modal-button">ADD PROMO</label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-3xl font-bold text-center pt-4">Add Promo</h3>
                
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Kode Promo
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Masukkan kode promo"
                      className="input input-bordered !rounded-md w-full"
                      required
                      {...register("code")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Persentase Diskon
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      placeholder="Masukkan persentase diskon"
                      className="input input-bordered !rounded-md w-full"
                      required
                      {...register("percentage")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Potongan Maksimal
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      placeholder="Masukkan potongan maksimal"
                      className="input input-bordered !rounded-md w-full"
                      required
                      {...register("maxCut")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text !text-lg !font-semibold">
                      Batas Pemakaian
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Masukkan batas pemakaian"
                      className="input input-bordered !rounded-md w-full"
                      required
                      {...register("maxUse")}
                    />
                  </label>
                </div>
                <button className="btn btn-primary rounded-lg mx-auto block mt-8">
                  Create Promo
                </button>
              </form>
              </label>
            </label>
          </div>

          {promo.map((p) => {
            return (
              <PromoMerchantCard 
                key={p.id} 
                id={p.id}
                code={p.code} 
                percentage={p.percentage} 
                maxUse={p.maxUse} 
                maxCut={p.maxCut} 
                totalUse={p.totalUse} 
              />
            )
          })}
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default Promo;
