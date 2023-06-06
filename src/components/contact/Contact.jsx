import React from "react";
import { letsConnect } from "../../assets/index";
import { FaSkype, FaPhone } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="md:h-full pt-16">
      <div className="sm:w-full h-full p-12 md:grid grid-cols-2 gap-40 lg:ml-28">
        <form className="bg-white bg-opacity-10 rounded-xl p-12 h-[500px]">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full gap-4">
              <input
                className="input_bg p-2 w-full"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="w-full gap-4">
              <input
                className="input_bg p-2 w-full"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full gap-4">
              <input
                className="input_bg p-2 w-full"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="w-full gap-4">
              <textarea
                placeholder="Message"
                name="text"
                className="input_bg p-2 w-full"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="text-white text-sm font-light tracking-wider outline-none pt-6">
              <button className="py-2 px-16 border-solid bg-yellow-500 text-black rounded-lg  hover:bg-yellow-400 hover:text-black duration-300">
                Send
              </button>
            </div>
          </div>
        </form>
        <div className="sm:h-full ml-0 text-gray-600">
          <div>
            <img
              className="sm:w-3/4 h-30 object-cover mb-2 md:w-[300px] pt-0"
              src={letsConnect}
              alt="connect_photo"
            />
          </div>
          <div className="text-white">
            <h3 className="text-3xl font-extralight text-yellow-500 font-titleFont">
              Rhey Yu
            </h3>
            <p className="text-3xl mb-4">Full Stack Developer</p>
            <div className=" flex flex-col gap-4 justify-start font-extralight tracking-wider">
              <div className="items-center flex">
                <div className="mr-2">
                  <FaPhone />
                </div>
                <span className="mr-3 font-bold text-orange-300">Mobile: </span>
                09557027612
              </div>
              <div className="items-center flex">
                <div className="mr-2">
                  <RiMailFill />
                </div>
                <span className="mr-3 font-bold text-orange-300">Email: </span>
                rhey2476@gmail.com
              </div>
              <div className="items-center flex">
                <div className="mr-2">
                  <FaSkype />
                </div>
                <span className="mr-3 font-bold text-orange-300">Skype: </span>
                rhey_yu@live.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
