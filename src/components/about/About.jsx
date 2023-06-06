import React from "react";
import { myProfile } from "../../assets";
import {FaFacebookF,FaLinkedinIn,FaGithub,FaNodeJs,FaReact,FaLaravel,FaTwitter,FaSkype,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {SiTailwindcss,SiJavascript, SiCss3,SiMysql,SiPhp,SiBootstrap,} from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="md:w-full h-full pt-20 px-20 lg:h-screen">
      <div className="sm:pt-5 flex flex-col pb-10 items-center mx-auto">
        <h1 className="text-md capitalize text-yellow-400 font-extralight border-[1px] border-white border-opacity-30 px-3 py-2 ">
          KNOW MORE ABOUT ME
        </h1>
      </div>
      <div className="md:grid grid-cols-2">
        <div>
          <div className="md:w-1/2">
            <img
              className="shadow-shadowOne hover:scale-105 duration-300 cursor-pointer"
              src={myProfile}
              alt="profile_pic"
            />
          </div>
          <div className="mt-5">
            <h3 className="font-light text-white mb-4 uppercase tracking-wide">
              Let's Connect
            </h3>
            <div className="flex gap-4 sm:mb-10">
              <span className="socialIcons">
                <FaFacebookF />
              </span>
              <span className="socialIcons">
                <FaLinkedinIn />
              </span>
              <span className="socialIcons">
                <FaTwitter />
              </span>
              <span className="socialIcons">
                <FaSkype />
              </span>
              <span className="socialIcons">
                <FaGithub />
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="leading-7 text-justify text-orange-100">
            Ni hao, I'm Rhey Yu, you can call me Rhey and I just finished my
            bootcamp this April of 2023 as a Full Stack Web Developer and
            currently looking for a position as a Junior Web Developer to
            enhanced my skillset. Highly organized, responsible. With good
            communication skills, able to work as independent or with a team.
            Everysince at a young age, I'm always curious about how things work
            when clicking something in my computer. I love to read tech books,
            watching discovery channel and how stuff works. Right now I do
            graphic design for walk-in clients like business card,flyers,
            invitations for printout.
          </p>
          <div className="mt-5">
            <h3 className="font-light inline-flex text-yellow-400 mb-4 tracking-wide border-[1px] border-white border-opacity-30 px-7 py-1 sm:mb-7">
              SKILL SET
            </h3>
          </div>
          <div className="md:flex flex-row">
            <div className="flex gap-10 justify-evenly text-cyan-800">
              <div className="text-center">
                <span className="skillIcons">
                  <AiFillHtml5 />
                </span>
                <p>Html</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <SiTailwindcss />
                </span>
                <p>Tailwind</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <SiJavascript />
                </span>
                <p>Javascript</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <FaNodeJs />
                </span>
                <p>Nodejs</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <FaReact />
                </span>
                <p>React</p>
              </div>
            </div>
          </div>
          <div className="md:flex flex-row mt-5">
            <div className="flex gap-10 justify-evenly text-cyan-800">
              <div className="text-center">
                <span className="skillIcons">
                  <FaLaravel />
                </span>
                <p>Laravel</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <SiCss3 />
                </span>
                <p>Css</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <SiMysql />
                </span>
                <p>MySql</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <SiPhp />
                </span>
                <p>Php</p>
              </div>
              <div className="text-center">
                <span className="skillIcons">
                  <SiBootstrap />
                </span>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
