import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import AuthTitle from "../components/AuthTitle";
import { registerMerchant } from '../models/auth';

const Register = () => {

  const { handleSubmit, register } = useForm();
  const router = useRouter()

  const onSubmit = async (data) => {
    const res = await registerMerchant(data);
    console.log(res);
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Register Merchant | EXIT COMPUTER MANGO TWO</title>
        <meta
          name="description"
          content="Register your merchant on EXIT COMPUTER MANGO TWO"
        />
      </Head>
      <main className="mx-auto pt-12">
        <AuthTitle />
        <div className="card md:w-[28rem] bg-base-100 shadow-xl mx-auto mt-8">
          <div className="card-body !px-12">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <h4 className="text-center mb-4">Merchant</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text !text-lg !font-semibold">
                    Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="example@email.com"
                    required
                    className="input input-bordered !rounded-md w-full"
                    {...register("email")}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text !text-lg !font-semibold">
                    Merchant Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered !rounded-md w-full"
                    required
                    {...register("merchantName")}
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
                    className="input input-bordered !rounded-md w-full"
                    required
                    {...register("password")}
                  />
                </label>
              </div>
              <button className="btn btn-primary rounded-lg mx-auto block mt-8">
                CREATE ACCOUNT
              </button>
            </form>
            <div className="text-center mt-4">
              <p>Hanya ingin berbelanja?</p>
              <Link href="/register">
                <span className="text-primary cursor-pointer hover:text-primary-focus">
                  Daftarkan akun pengguna Anda!
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
