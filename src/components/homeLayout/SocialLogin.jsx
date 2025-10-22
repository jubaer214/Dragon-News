import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-lg">Login with</h2>
      {/* <!-- Email --> */}
      <button class="btn hover:btn-secondary border-black w-full mb-3 mt-5">
        <FcGoogle size={22} />
        Login with Google
      </button>

      {/* <!-- GitHub --> */}
      <button class="btn hover:btn-primary w-full border-black">
        <ImGithub size={22} />
        Login with GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
