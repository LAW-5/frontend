import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import MerchantDashboardDrawer from "../../components/MerchantDashboardDrawer";
import NavbarMerchant from "../../components/NavbarMerchant";
import ProductList from "../../components/ProductList";
import ProductModal from "../../components/ProductModal";
import { getAllMerchantProducts, getAllProducts } from '../../models/product';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllMerchantProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

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
            List of Product
          </h2>
          <div className="flex justify-center">
            <label htmlFor="my-modal-4" className="btn btn-primary rounded-lg modal-button">ADD PRODUCT</label>
            <ProductModal isUpdate={false} modalId="my-modal-4" />
          </div>
          {loading ? (
            <div className="mx-auto h-96 flex justify-center items-center">
              <progress className="progress w-56"></progress>
            </div>
          ) : (
            <ProductList products={products} isMerchant />
          )}
        </main>
      </div>
      <MerchantDashboardDrawer />
    </>
  );
};

export default Product;
