import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AuthTitle from "../components/AuthTitle";
import { login as loginUser } from "../models/auth";
import { login, setRole } from '../redux/features/auth';
import ls from "local-storage";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    if (res.status === 200) {
      ls("token", res.token);
      ls("role", res.role);

      dispatch(login())
      window.location.href = "/"
    } else {
      alert("Invalid email or password")
    }
  };

  return (
    <>
      <Head>
        <title>Login | EXIT COMPUTER MANGO TWO</title>
        <meta
          name="description"
          content="Login to your account on EXIT COMPUTER MANGO TWO"
        />
      </Head>
      <main className="mx-auto pt-12">
        <AuthTitle />
        <div className="card md:w-[28rem] bg-base-100 shadow-xl mx-auto mt-8">
          <div className="card-body !px-12">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
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
                    className="input input-bordered !rounded-md w-full"
                    required
                    {...register("email")}
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
                LOGIN
              </button>
            </form>
            <div className="text-center mt-4">
              Belum punya akun?{" "}
              <Link href="/register">
                <span className="text-primary cursor-pointer hover:text-primary-focus">
                  Daftar
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
