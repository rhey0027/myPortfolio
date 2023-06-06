import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Card = ({ title, des, src, techUsed }) => {
  return (
    <div className="cards">
      <div className="cursor-pointer p-8 hover:scale-110 duration-300">
        <img className="w-full h-[250px] object-cover" src={src} alt="src" />
      </div>
      <div className="flex items-center justify-between px-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex gap-2">
          <span className="text-lg w-8 h-8 rounded-full inline-flex bg-techbox text-black justify-center items-center hover:text-designColor duration-100 cursor-pointer">
            <BsGithub />
          </span>
          <span className="text-lg w-8 h-8 rounded-full inline-flex bg-techbox text-green-900 justify-center items-center hover:text-black duration-100 cursor-pointer">
            <FaGlobe />
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-300 font-light text-normal px-7 tracking-wide capitalize mt-4 mb-7">
          {des}
        </p>
        <p className="lowercase text-yellow-500 font-normal tracking-wider text-lg">
          {techUsed}
        </p>
      </div>
    </div>
  );
};

export default Card;
