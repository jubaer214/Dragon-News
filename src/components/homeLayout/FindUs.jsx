import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold text-xl mb-4">Find Us On</h2>
        <div className="">
          <div className="join join-vertical w-full">
            <button className="btn bg-base-100  join-item">
              <FaFacebook size={22}></FaFacebook>Facebook
            </button>
            <button className="btn bg-base-100 join-item"><FaTwitter size={22}/>Twitter</button>
            <button className="btn bg-base-100 join-item">
              <FaInstagram size={22}></FaInstagram>Instagram
            </button>
          </div>
        </div>
      </div>
    );
};

export default FindUs;