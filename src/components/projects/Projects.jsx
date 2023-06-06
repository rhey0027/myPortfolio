import React from "react";
import Card from "./Card";
import {
  projectOne,
  projectTwo,
  projectFour,
} from "../../assets/index";

const Projects = () => {
  return (
    <div id="project">
      <div className="sm: pt-28 flex flex-col items-center">
        <h1 className="text-md text-yellow-400 font-extralight border-[1px] border-white border-opacity-30 px-5 py-2 uppercase">
          my bootcamp projects
        </h1>
      </div>
      <div className="sm:w-full h-full px-10 md:grid grid-cols-3 gap-16">
        <div className="md:block pt-10">
          <div className="bg-black bg-opacity-80 border-[1px] border-lime-700 rounded-lg h-[500px]">
            <Card
              title="Sweet Cake"
              des="Ordering cakes made easy, at sweetcakes alabama life is getting sweeter everyday!"
              techUsed="html, bootstrap, javascript, figma"
              src={projectTwo}
            />
          </div>
        </div>
        <div>
          <div className="md:block pt-10">
            <div className="bg-black bg-opacity-80 border-[1px] border-lime-700 rounded-lg h-[500px]">
              <Card
                title="Student Database"
                des="A database management system for school and universities for easy student information retrival and updates."
                techUsed="React,Tailwind,  Figma, Laravel, MySql"
                src={projectOne}
              />
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="md:block pt-10">
            <div className="bg-black bg-opacity-80 border-[1px] border-lime-700 rounded-lg h-[500px]">
              <Card
                title="Stock Photo Album"
                des="Save your memories online and access it anywhere you are"
                techUsed="html, bootstrap, javascript, figma"
                src={projectFour}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
