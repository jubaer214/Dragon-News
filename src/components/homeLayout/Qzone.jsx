import React from "react";
import swimming from "../../assets/swimming.png";
import classes from "../../assets/class.png";
import playground from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold text-xl mb-5">Q-Zone</h2>
      <div>
        <img className="w-full" src={swimming} alt="" />
        <img className="w-full" src={classes} alt="" />
        <img className="w-full" src={playground} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
