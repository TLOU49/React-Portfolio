import React from "react";
import Dean from "../assets/Face2.png";
import { PiHandWavingFill } from "react-icons/pi";
import RLogo from "../assets/react.png"
import H3 from "../assets/images.jpg"
import Redux from "../assets/redux.webp"
import About from "./About";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="mdl:flex w-full py-[3rem]">
        <span className="flex bg-#edf2f8  h-20 rounded shadow-2xl w-40 p-5 ml-[4rem] mdl:mt-[15rem] mdl:ml-[8rem]">
          <span className="text-yellow-400 p-2 mr-2 text-[2.1rem]">
            <PiHandWavingFill />
          </span>
          <p className="text-[11px] text-gray-400">
            Hello! I'm<p className="text-[1.4rem] font-bold text-black"> Dean</p>
          </p>
        </span>
        <span className="flex bg-#edf2f8 h-16 rounded shadow-2xl w-32 p-3 mt-[1rem] ml-[4rem] mdl:mt-[20rem] mdl:ml-[-10rem]">
         <p>Fullstack developer</p>
        </span>
        <div className="h-64 w-68 mt-[rem] ml-[10rem]  mdl:mt-[6rem]">
            <img
              height={200}
              width={250}
              src={Dean}
              alt="dean"
              className="mdl:ml-[-1px] mdl:pt-12 ml-1 pt-1 mdl:h-80 mdl:w-80 rounded-full"
            />
        </div>
        <div className="flex m-16 mdl:flex-col mdl:m-10">
            <span><p className="h-20 w-20 m-6 mt-0 pt-3  rounded-full shadow-2xl "><img src={H3} alt="HTML, CSS, JS" className="rounded-full"/></p></span>
            <span><p className="h-28 w-28  m-8 mt-0 pt-1 rounded-full shadow-2xl"><img src={RLogo} alt="react logo" className="rounded-full"/></p></span>
            <span><p className="h-20 w-20 m-6 mt-0 p-1 rounded-full shadow-2xl"><img src={Redux} alt="" className="rounded-full"/></p></span>
        </div>
        <span className="hidden mdl:flex absolute top-[0] right-0 rounded-full bg-gray-200 shadow-2xl h-40 w-40 z-0 "></span>
      </div>
      <div>
        <About/>
      </div>
    </div>
  );
};

export default Home;
