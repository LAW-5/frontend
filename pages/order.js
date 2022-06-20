import Head from "next/head";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import OrderTable from "../components/OrderTable";
import order, { selectOrderData } from "../redux/features/order";
import { formatIndonesianCurrency } from "../utils/string";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getAllPromo, pakaiPromo } from "../models/promo";
import { placeOrder } from "../models/order";
import { decreaseBalance, getBalance } from "../models/payment";

export default function Home() {
  const orderData = useSelector(selectOrderData);
  const { register, handleSubmit } = useForm();
  const [promoCode, setPromoCode] = useState("");
  const [promoList, setPromoList] = useState([]);
  const [promo, setPromo] = useState(0);
  const [totalPesanan, setTotalPesanan] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const merchantId = orderData[0].merhcantId;
    setTotalPesanan(
      orderData
        .map((p) => p.price * p.quantity)
        .reduce((acc, curr) => acc + curr)
    );
    getAllPromo(merchantId).then((res) => {
      setPromoList(res.data);
    });
  }, [orderData]);

  const handleApplyPromo = () => {
    if (promoCode !== "") {
      const promoFound = promoList.find((p) => p.code === promoCode);
      if (!promoFound) {
        alert("Promo code tidak ditemukan");
      } else {
        const promoValue = Math.min(
          promoFound.maxCut,
          Math.floor((promoFound.percentage / 100) * totalPesanan)
        );
        setPromo(promoValue);
        pakaiPromo(promoFound.id);
      }
    }
  };

  const onSubmit = async (data) => {

    setLoading(true)

    const orderPrice = totalPesanan - promo;

    const body = {
      merchantId: orderData[0].merhcantId,
      productId: orderData.map((p) => p.id),
      quantity: orderData.map((p) => p.quantity),
      totalPrice: orderPrice,
      name: data.name,
      address: data.address,
    };

    const resBalance = await getBalance();

    if (resBalance.balance < orderPrice) {
      alert(
        "Saldo tidak mencukupi, saldo anda saat ini " +
          formatIndonesianCurrency(resBalance.balance)
      );
      setLoading(false)
    } else {
      await decreaseBalance({ amount: orderPrice, id: resBalance.id });

      await placeOrder(body).then((res) => {
        alert("Pesanan berhasil dikirim");
        setLoading(false)
        window.location.href = "/user-dashboard/order-history";
      });
    }
  };

  return (
    <>
      <Head>
        <title>Checkout | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <Navbar />
      <main className="mx-auto max-w-6xl pt-4 pb-20">
        <Banner title="Checkout" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-x-auto w-full mt-8 px-2"
        >
          <OrderTable orderData={orderData} />
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
                required
                {...register("name")}
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
              <textarea
                className="textarea input w-full !h-32 !rounded-md input-bordered"
                placeholder="Alamat"
                required
                {...register("address")}
              ></textarea>
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
                className="input input-bordered !rounded-md w-full mr-4"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button type="button" onClick={handleApplyPromo} className="btn">
                Apply
              </button>
            </label>
          </div>
          <div className="mt-20 border-b border-secondary"></div>
          <div className="flex w-full justify-end mt-8">
            <div className="w-96 leading-loose">
              <div className="flex justify-between">
                <span>Total Pesanan:</span>
                <span>{formatIndonesianCurrency(totalPesanan)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Promo Diskon:</span>
                <span>-{formatIndonesianCurrency(promo)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xl">Total Pembayaran:</span>
                <span className="text-primary text-xl font-bold">
                  {formatIndonesianCurrency(totalPesanan - promo)}
                </span>
              </div>
              <button
                type="submit"
                className={`btn btn-primary rounded-lg mt-8 w-full ${loading && "loading"}`}
              >
                ORDER
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
