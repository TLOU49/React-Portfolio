import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";

const Projects = ({image, title, codeLink, projectLink, description}) => {
  const [hover, setHover] = useState("");

  const handleHover = () => {
    setHover("View Code")
  };
  const handleMouseOut = () => {
    setHover()
  };

  return (
    <div>
      <div className="w-full text-center">
        <span className="flex flex-col bg-white w-56 h-48 m-4 items-center text-center justify-center flex-wrap rounded-md hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
          <div className="w-48 rounded p-1 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">
          <img
            height={180}
            width={180}
            src={image}
            alt="projects"
            className="rounded"
            />
            </div>
          <p className="text-[11px] py-1 text-gray-400 font-semibold">{title}</p>
          <p className="text-[11px] text-gray-400 font-semibold">{description}</p>
          <span className="flex text-[10px] text-center text-white font-semibold ">
            <a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="mr-2 bg-gray-600 rounded h-6 w-14 pt-1 hover:bg-gray-400 hover:text-black"
              onMouseOver={handleHover} onMouseOut={handleMouseOut}
            >
              {hover? <BsCodeSlash className="text-[14px] ml-5 font-bold" />: "View code"}
            </a>
            <a href={projectLink} rel="noreferrer" target="_blank" className="bg-gray-600 rounded h-6 w-16 pt-1 hover:bg-gray-400 hover:text-black">
              View Project
            </a>
          </span>
        </span>
        </div>
      </div>
  );
};

export default Projects;
