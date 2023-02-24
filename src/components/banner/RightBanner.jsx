import React from "react";
import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 pt-10 flex justify-center items-center relative">
      <img src={bannerImg} alt="bannerImg" className="w-[300px] h-[350px] lgl:w-[500px] lgl:h-[500px] z-10" />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
