import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import AuthTitle from "../components/AuthTitle";
import { registerUser } from "../models/auth";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    const res = await registerUser(data);
    setLoading(false)
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Register | EXIT COMPUTER MANGO TWO</title>
        <meta
          name="description"
          content="Register your account on EXIT COMPUTER MANGO TWO"
        />
      </Head>
      <main className="mx-auto pt-12">
        <AuthTitle />
        <div className="card md:w-[28rem] bg-base-100 shadow-xl mx-auto mt-8">
          <div className="card-body !px-12">
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text !text-lg !font-semibold">
                    Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="input input-bordered !rounded-md w-full"
                    required
                    {...register("email")}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text !text-lg !font-semibold">
                    Full Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered !rounded-md w-full"
                    required
                    {...register("fullName")}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text !text-lg !font-semibold">
                    Password
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="input input-bordered !rounded-md w-full"
                    {...register("password")}
                  />
                </label>
              </div>
              <button className="btn btn-primary rounded-lg mx-auto block mt-8">
                CREATE ACCOUNT
              </button>
            </form>
            <div className="text-center mt-4">
              Sudah punya akun?{" "}
              <Link href="/login">
                <span className="text-primary cursor-pointer hover:text-primary-focus">
                  Masuk
                </span>
              </Link>
            </div>
            <div className="text-center">
              Punya usaha?{" "}
              <Link href="/register-merchant">
                <span className="text-primary cursor-pointer hover:text-primary-focus">
                  Daftarkan toko Anda!
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
