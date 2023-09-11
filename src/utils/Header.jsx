import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <div>
      <div className="justify-between flex h-12 p-2 shadow-xl sticky bg-gray-100 opacity-75">
        <span className="flex text-[1.3rem] font-semibold ml-2 ">
          <h1 className="box-border h-9 border-[3px] border-dean_blue rounded-md">
            <p className="px-1 text-dean_blue ">Dean</p>
          </h1>
          <h1 className="p-1 pt-2 text-[1.1rem] font-bold">Mabuela</h1>
        </span>
        <span className="pt-1 text-[10px] hidden mdl:flex">
          <a href="#home" className="mr-6 hover:border-t-[3px] border-dean_blue scroll-smooth">HOME</a>
          <a href="#about" className="mr-6 hover:border-t-[3px] border-dean_blue scroll-smooth">ABOUT</a>
          <a href="#work" className="mr-6 hover:border-t-[3px] border-dean_blue">WORK</a>
          <a href="#skills" className="mr-6 hover:border-t-[3px] border-dean_blue">SKILLS</a>
          <a href="#contact" className="mr-6 hover:border-t-[3px] border-dean_blue">CONTACT</a>
        </span>
        <span className="bg-dean_blue rounded-full h-7 w-7 mr-2 mdl:hidden">
       <p
            className="pl-[6px] pt-[6px] text-white "
            onClick={() => setMenuOpen(true)}
            >
            <HiOutlineMenuAlt4 />
          </p>
         
        </span>
        <p className="hidden mdl:flex"></p>
      </div>
      {menuOpen && (
        <span className="absolute top-0 right-0">
          <Menu setMenuOpen={setMenuOpen} />
        </span>
      )}
    </div>
  );
};

export default Header;
