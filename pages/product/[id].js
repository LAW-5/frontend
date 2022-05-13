import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import PromoCard from '../../components/PromoCard';
import QuantityInput from '../../components/QuantityInput';
import { formatIndonesianCurrency } from "../../utils/string";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0)
  return (
    <>
      <Head>
        <title>Product Name | EXIT COMPUTER MANGO TWO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-16 flex">
        <div className="w-3/12 px-4">
          <Image
            src="/images/RTX-3090.jpeg"
            width={240}
            height={240}
            alt="Product Name"
          />
        </div>
        <div className="w-6/12 px-4">
          <h1 className="text-3xl leading-12 font-semibold line-clamp-2">
            Geforce RTX 3090 Super Ready for Bitcoin Mining Gaming F1 VR Ready
            With Color Stripe
          </h1>
          <h4 className="text-3xl leading-12 font-bold text-primary my-8">
            {formatIndonesianCurrency(15999999)}
          </h4>
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/images/merchant-logo.jpeg"
                  width={40}
                  height={40}
                  alt="Merchant name"
                  layout="responsive"
                />
              </div>
            </div>
            <h5 className="font-semibold">Toko Abadi Jaya</h5>
          </div>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="flex items-center mt-8">
            <span className="mr-4">Quantity</span>
            <QuantityInput 
              quantity={quantity}
              onAdd={() => setQuantity(quantity + 1)}
              onSubstract={() => setQuantity(Math.max(quantity - 1, 0))}
            />
          </div>
          <div className="flex mt-8 gap-8">
            <button className="btn btn-secondary rounded-lg">
              Add to Cart
            </button>
            <button className="btn btn-primary rounded-lg">Checkout</button>
          </div>
        </div>
        <div className="w-3/12 px-4">
          <h5 className="font-bold text-md">Available Promo</h5>
          <PromoCard discount={75} maxDiscount={20000} code="ABCDE"/>
          <PromoCard discount={80} maxDiscount={10000} code="ABCDF"/>
          <PromoCard discount={20} maxDiscount={100000} code="ABCDG"/>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
