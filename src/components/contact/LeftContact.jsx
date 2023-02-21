import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { contactImage } from "../../assets";

const LeftContact = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full flex flex-col gap-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] px-8 py-9 rounded-lg shadow-shadowOne">
      <img
        className="w-full h-64 mb-3 rounded-lg"
        src={contactImage}
        alt="contactImage"
      />
      <div className="flex flex-col gap-5">
        <h3 className="text-3xl font-bold text-white">Sadiq Aghayev</h3>
        <p className="text-lg font-normal text-gray-400">
          EMBAWOOD Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          et, consequatur dolorem ullam cumque quod!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText">+994(50) 858 87 61</span>
        </p>
        <p>
          Email:{" "}
          <span className="text-lightText">sadiqagayev820@gmail.com</span>
        </p>
      </div>
      <div className='mt-3'>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebook />
          </span>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  )
}

export default LeftContact