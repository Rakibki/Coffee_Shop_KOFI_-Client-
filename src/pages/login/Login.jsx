import React, { useContext } from "react";
import Section_Title from "../../shared/section_title/Section_Title";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuhtProvider";

const Login = () => {

  const {loginUser} = useContext(authContext)

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    .then((res) => {
      console.log(res.user, "user Login");
    })
    .catch((e) => console.log(e.message))
  }

  return (
    <div>
      <Section_Title>HOME / ACCOUNT</Section_Title>
      <div className="flex justify-center my-16">
        <div className="lg:w-[50%] md:w-[65%] w-[90%] flex-shrink-0 bg-[#f3f3f3]">
          <h1 className="text-3xl font-semibold font-Oswald text-center mt-8">
            Login
          </h1>
          <p className="text-center font-Open mt-4 text-[#a3a3a3]">
            Please login using account detail bellow.
          </p>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="flex items-center justify-between">
                <button className="px-5 py-2 mt-4  bg-[#929292] transition-all text-white font-medium hover:bg-[#c7a17a]">
                  Sing In
                </button>
                <div>
                  <p className="text-[#333333] transition-all hover:underline cursor-pointer hover:text-[#c7a17a]">
                    Forgot your password?
                  </p>
                </div>
              </div>
              <Link to={"/register"}>
                <p className="mt-3 transition-all hover:underline cursor-pointer hover:text-[#c7a17a]">
                  Create account
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
