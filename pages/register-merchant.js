import Head from "next/head";
import Link from "next/link";
import AuthTitle from "../components/AuthTitle";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register Merchant | EXIT COMPUTER MANGO TWO</title>
        <meta
          name="description"
          content="Register your merchant on EXIT COMPUTER MANGO TWO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto pt-12">
        <AuthTitle />
        <div className="card md:w-[28rem] bg-base-100 shadow-xl mx-auto mt-8">
          <div className="card-body !px-12">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <h4 className="text-center mb-4">Merchant</h4>
            <form>
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
                    className="input input-bordered !rounded-md w-full"
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
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text !text-lg !font-semibold">
                    Merchant Logo
                  </span>
                </label>
                <label
                  className="btn btn-secondary rounded-lg w-36 text-white"
                  htmlFor="merchant-picture"
                >
                  UPLOAD
                </label>
                <input type="file" hidden id="merchant-picture" />
              </div>
              <button className="btn btn-primary rounded-lg mx-auto block mt-8">
                CREATE ACCOUNT
              </button>
            </form>
            <div className="text-center mt-4">
              Hanya ingin berbelanja?{" "}
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
