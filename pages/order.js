import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import OrderTable from "../components/OrderTable";
import { formatIndonesianCurrency } from '../utils/string';

export default function Home() {
  return (
    <>
      <Head>
        <title>Checkout | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-4 pb-20">
        <Banner title="Checkout" />
        <div className="overflow-x-auto w-full mt-8">
          <OrderTable merchantName="Toko Jaya Abadi" />
          <h3 className="font-semibold text-xl mt-8">Isi Alamat Pengiriman</h3>
          <div className="form-control mt-4">
            <label className="label !px-0">
              <span className="label-text !text-lg !font-semibold">
                Nama Penerima
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered !rounded-md w-full"
              />
            </label>
          </div>
          <div className="form-control mt-4">
            <label className="label !px-0">
              <span className="label-text !text-lg !font-semibold">
                Alamat Penerima
              </span>
            </label>
            <label className="input-group">
              <textarea className="textarea input w-full !h-32 !rounded-md input-bordered" placeholder="Alamat"></textarea>
            </label>
          </div>
          <h3 className="font-semibold text-xl mt-12">Gunakan Promo</h3>
          <div className="form-control mt-4">
            <label className="label !px-0">
              <span className="label-text !text-lg !font-semibold">
                Kode Promo
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="xxxxx"
                className="input input-bordered !rounded-md w-full"
              />
            </label>
          </div>
          <div className="mt-20 border-b border-secondary"></div>
          <div className="flex w-full justify-end mt-8">
            <div className="w-96 leading-loose">
              <div className="flex justify-between">
                <span>Total Pesanan:</span>
                <span>{formatIndonesianCurrency(30000000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Ongkos Kirim:</span>
                <span>{formatIndonesianCurrency(30000000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Promo Diskon:</span>
                <span>-{formatIndonesianCurrency(30000000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xl">Total Pembayaran:</span>
                <span className="text-primary text-xl font-bold">-{formatIndonesianCurrency(30000000)}</span>
              </div>
              <button className="btn btn-primary rounded-lg mt-8 w-full">ORDER</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
