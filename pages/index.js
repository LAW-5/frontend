import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { getAllProducts, searchProduct } from "../models/product";
import ls from "local-storage";
import { login } from "../redux/features/auth";
import { useRouter } from 'next/router';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const router = useRouter();
  const name = router.query.search

  useEffect(() => {
    setLoading(true);
    if (name) {
      searchProduct(name).then((res) => {
        setProducts(res.data);
        console.log(res)
        setLoading(false);
      });
    } else {
      getAllProducts().then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    }
  }, [name]);

  useEffect(() => {
    const token = ls("token");
    if (token) {
      dispatch(login(token));
    }
  }, [dispatch]);

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
