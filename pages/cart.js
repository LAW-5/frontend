import Head from "next/head";
import Banner from "../components/Banner";
import CartBottomBar from '../components/CartBottomBar';
import CartTable from "../components/CartTable";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cart | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-4 pb-20">
        <Banner title="Cart" />
        <div className="overflow-x-auto w-full mt-8">
          <CartTable merchantName="Toko Jaya Abadi" />
          <CartTable merchantName="Toko Luar Biasa" />
        </div>
      </main>
      <CartBottomBar total={14999999} />
    </>
  );
}
