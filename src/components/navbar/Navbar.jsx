import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav1 = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-end w-full h-20 items-center bg-zinc-900 bg-opacity-80 fixed z-20 pr-5 md:bg-transparent">
      {/* <h1 className="w-full text-2xl text-orange-300">RHEY_YU | Full Stack</h1> */}
      <div className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Link
            to={link}
            key={id}
            className="active px-6 cursor-pointer text-white"
          >
            {link}
          </Link>
        ))}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 md:hidden text-yellow-500"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <div className="flex flex-col items-center justify-center absolute inset-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-orange-100">
          {links.map(({ id, link }) => (
            <Link 
            to={link} 
            key={id} 
            className="active px-4 cursor-pointer py-3">
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav1;
