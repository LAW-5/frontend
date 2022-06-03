import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import PromoCard from "../../components/PromoCard";
import QuantityInput from "../../components/QuantityInput";
import { getProductDetail } from "../../models/product";
import { getAllPromo } from "../../models/promo";
import { formatIndonesianCurrency } from "../../utils/string";
import _ from "lodash";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const [promo, setPromo] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resProduct = await getProductDetail(id);
      const resPromo = await getAllPromo();
      setProduct(resProduct);
      setPromo(resPromo.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Head>
        <title>{product?.name} | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <Navbar />
      {loading ? (
        <div className="mx-auto h-96 flex justify-center items-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <main className="mx-auto max-w-6xl pt-16 flex">
          <div className="w-3/12 px-4">
            <img
              src={product?.imageUrl}
              width={240}
              height={240}
              alt={product?.name}
            />
          </div>
          <div className="w-6/12 px-4">
            <h1 className="text-3xl leading-12 font-semibold line-clamp-2">
              {product?.name}
            </h1>
            <h4 className="text-3xl leading-12 font-bold text-primary my-8">
              {formatIndonesianCurrency(product?.price)}
            </h4>
            {/* <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/images/merchant-logo.png"
                  width={40}
                  height={40}
                  alt="Merchant name"
                  layout="responsive"
                />
              </div>
            </div>
            <h5 className="font-semibold">Toko Abadi Jaya</h5>
          </div> */}
            <p className="mt-8">{product?.description}</p>
            <div className="flex items-center mt-8">
              <span className="mr-4">Quantity</span>
              <QuantityInput
                quantity={quantity}
                onAdd={() => setQuantity(quantity + 1)}
                onSubstract={() => setQuantity(Math.max(quantity - 1, 0))}
              />
            </div>
            <div className="flex mt-8 gap-8">
              <Link href="/cart">
                <button className="btn btn-secondary rounded-lg">
                  Add to Cart
                </button>
              </Link>
              <Link href="/order">
                <button className="btn btn-primary rounded-lg">Checkout</button>
              </Link>
            </div>
          </div>
          <div className="w-3/12 px-4">
            <h5 className="font-bold text-md">Available Promo</h5>
            {_.map(promo, (item) => (
              <PromoCard
                key={item.id}
                code={item.code}
                maxDiscount={item.maxCut}
                discount={item.percentage}
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default ProductDetail;
