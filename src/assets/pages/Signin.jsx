import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Signin = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user)
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="font-bold text-2xl text-center mt-4">
            Register Your Account
          </h2>
          <fieldset className="fieldset mt-6">
            <label className="label font-bold text-black text-lg">
              Your Name:
            </label>
            <input
              required
              name="name"
              type="text"
              className="input bg-base-200 border-none text-gray-600"
              placeholder="Your Name"
            />
            <label className="label font-bold text-black text-lg mt-4">
              Photo URL:
            </label>
            <input
              required
              name="photo"
              type="text"
              className="input bg-base-200 border-none text-gray-600"
              placeholder="Photo Url"
            />
            <label className="label font-bold text-black text-lg mt-4">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              className="input bg-base-200 border-none text-gray-600"
              placeholder="Email"
            />
            <label className="label mt-4 font-bold text-black text-lg">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              className="input bg-base-200 border-none text-gray-600"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
          </fieldset>
          <p className="text-center text-accent font-bold">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 link-hover hover:text-red-800"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
