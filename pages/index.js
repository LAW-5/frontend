import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { getAllProducts } from "../models/product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>EXIT COMPUTER MANGO TWO - Layanan dan Aplikasi Web</title>
        <meta
          name="description"
          content="It is an e-commerce application that provides various computer products and accessories at competitive prices."
        />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-4">
        <Banner title="Exit Computer Mangga Two" />
        {loading ? (
          <div className="mx-auto h-96 flex justify-center items-center">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </main>
    </>
  );
}
