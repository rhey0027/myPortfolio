import React from "react";
import { dev } from "../../assets/index";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer.", "Graphic Designer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 3000,
  });

  return (
    <section id="home" className="font-titleFont">
      <div className="sm:h-full w-full mx-auto px-10 pt-32 md:grid grid-cols-2 lg:h-screen">
        <div>
        <h4 className="text-lg font-light text-orange-100 md:text-2xl">
          Hello, you can call me
        </h4>
        <h1 className="text-6xl font-bold text-yellow-500 tracking-wider py-5 md:text-7xl">
          <span className="capitalize font-signature">Rhey</span>
        </h1>
        <h2 className="text-4xl font-bold text-white text-left pb-7 md:text-5xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="sm: text-justify text-normal leading-7 text-orange-100 font-extralight pb-10 md:leading-8 text-lg">
          I have always been facinated by the way things work in the web and how
          they came to take the form by using only codes, and it gives me the
          desire to learn more. My aim is to be a web developer that is not only
          competent but also innovative. Stay up to date with the latest web
          technologies. Passionate and eager to learn more about the latest web
          application.
        </p>
        <a href="/myCv.pdf" target="_blank">
          <button className="py-2 px-7 rounded-md border-solid border border-borderButton text-white text-sm font-light tracking-wider hover:bg-borderButton hover:text-black duration-300 outline-none ">
            Mi Portfolio
          </button>
        </a>
        </div>
   
        <div className="block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
            <img className="object-fit md:w-3/4 sm:ml-0 md:ml-20"src={dev} alt="dev_photo" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
