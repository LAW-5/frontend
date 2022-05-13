import Head from "next/head";
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from "../../components/MerchantDashboardDrawer";
import NavbarMerchant from "../../components/NavbarMerchant";
import PromoMerchantCard from "../../components/PromoMerchantCard";

const Promo = () => {
  return (
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
            <label htmlFor="promo-modal" className="btn btn-primary rounded-lg">ADD PROMO</label>
          </div>
          <PromoMerchantCard />
          <PromoMerchantCard />
          <PromoMerchantCard />
          <PromoMerchantCard />
          <PromoMerchantCard />
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default Promo;
