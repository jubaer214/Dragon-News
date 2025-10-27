import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signIn} =use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password })
    signIn(email,password).then(result => {
      const user = result.user;
      alert(user)
    }).catch(error => alert(error.code, error.message))
  }
    return (
      <div className="flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="font-bold text-2xl text-center mt-4">
              Login Your Account
            </h2>
            <fieldset className="fieldset mt-4">
              <label className="label font-bold text-black text-lg">
                Email
              </label>
              <input
                name='email'
                type="email"
                className="input bg-base-200 border-none text-gray-600"
                placeholder="Email"
              />
              <label className="label mt-4 font-bold text-black text-lg">
                Password
              </label>
              <input
                name='password'
                type="password"
                className="input bg-base-200 border-none text-gray-600"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover text-accent">Forgot password?</a>
              </div>
              <button type='submit' className="btn btn-primary mt-4">Login</button>
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
          </form>
        </div>
      </div>
    );
};

export default Login;