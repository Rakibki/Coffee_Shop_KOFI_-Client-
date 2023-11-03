import React, { useContext } from "react";
import Section_Title from "../../shared/section_title/Section_Title";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuhtProvider";

const Register = () => {

  const {createUser} = useContext(authContext)

  const handleRegister = (e) => {
    e.preventDefault()

    const fName = e.target.fName.value
    const lName = e.target.lName.value
    const email = e.target.email.value
    const password = e.target.password.value

    createUser(email, password)
    .then((res) => console.log(res.user))
    .catch((e) => console.log(e.message))
  }

  return (
    <div>
      <Section_Title>HOME / CREATE ACCOUNT</Section_Title>
      <div className="flex justify-center my-16">
        <div className="lg:w-[50%] md:w-[65%] w-[90%] flex-shrink-0 bg-[#f3f3f3]">
          <h1 className="text-3xl font-semibold font-Oswald text-center mt-8">
            Create Account
          </h1>
          <p className="text-center font-Open mt-4 text-[#a3a3a3]">
            Please Register using account detail bellow.
          </p>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
                required
                name="fName"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                required
                name="lName"
              />
            </div>

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
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <div className="flex items-center justify-between">
                <button type="submit" className="px-5 py-2 mt-4  bg-[#929292] transition-all text-white font-medium hover:bg-[#c7a17a]">
                  Create
                </button>
              </div>
              <Link to={"/login"}>
                <p className="mt-3 transition-all hover:underline cursor-pointer hover:text-[#c7a17a]">
                  Login account
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
