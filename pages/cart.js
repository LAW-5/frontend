import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import CartBottomBar from "../components/CartBottomBar";
import CartTable from "../components/CartTable";
import Navbar from "../components/Navbar";
import { getAllCart } from "../models/cart";
import { selectOrderData } from "../redux/features/order";

const ListOfCartTable = ({ carts }) => {
  return Object.entries(carts).map(([k, v]) => (
    <CartTable key={k} merchantName={`Toko ${k}`} cart={v.cart} />
  ));
};

export default function Cart() {
  const [carts, setCarts] = useState({});

  const orderData = useSelector(selectOrderData);

  useEffect(() => {
    getAllCart().then((res) => {
      setCarts(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Cart | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-4 pb-20">
        <Banner title="Cart" />
        <div className="overflow-x-auto w-full mt-8">
          {carts ? (
            <ListOfCartTable carts={carts} />
          ) : (
            "Belum ada barang di keranjang"
          )}
        </div>
      </main>
      <CartBottomBar
        total={orderData.length > 0 ? orderData
          .map((p) => p.price * p.quantity)
          .reduce((acc, curr) => acc + curr) : 0}
      />
    </>
  );
}
