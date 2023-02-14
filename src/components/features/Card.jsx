import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className="w-full border border-gray-600 h-80 px-12 py-10 rounded-lg flex items-center bg-gradient-to-r from-bodyColor to-[#1e2023] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="h-full flex flex-col gap-10 translate-y-14 group-hover:translate-y-2 transition-transform duration-500">
          <div>
            <span className="text-5xl text-red-700">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-red-700">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
