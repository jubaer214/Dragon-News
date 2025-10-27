import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
      <div className="flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-2xl text-center mt-4">
              Login Your Account
            </h2>
            <fieldset className="fieldset mt-4">
              <label className="label font-bold text-black text-lg">
                Email
              </label>
              <input
                type="email"
                className="input bg-base-200 border-none text-gray-600"
                placeholder="Email"
              />
              <label className="label mt-4 font-bold text-black text-lg">
                Password
              </label>
              <input
                type="password"
                className="input bg-base-200 border-none text-gray-600"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover text-accent">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
            <p className='text-center text-accent font-bold'>
              Don't have an account?{" "}
              <Link
                to="/auth/signin"
                className="text-red-500 link-hover hover:text-red-800"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;