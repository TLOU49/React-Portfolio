import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleHomeScroll = () =>{
    const height = window.scrollY;
    console.log(height);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
  const handleAboutScroll = () =>{
   window.scrollTo({ top: 600, behavior: 'smooth'});
  }
  const handleWorkScroll = () =>{
   window.scrollTo({ top: 1509.60, behavior: 'smooth'});
  }
  const handleSkillScroll = () =>{
    window.scrollTo({ top: 2107.19, behavior: 'smooth'});
  }
  const handleContactScroll = () =>{
    const height = window.scrollY;
    console.log(height);
    window.scrollTo({ top: 2487.2, behavior: 'smooth'});
  }

  return (
    <div >
      <div className="justify-between flex h-12 p-2 shadow-xl sticky bg-gray-100 opacity-75">
        <span className="flex text-[1.3rem] font-semibold ml-2 ">
          <h1 className="box-border h-9 border-[3px] border-dean_blue rounded-md">
            <p className="px-1 text-dean_blue ">Dean</p>
          </h1>
          <h1 className="p-1 pt-2 text-[1.1rem] font-bold">Mabuela</h1>
        </span>
        <span className="pt-1 text-[10px] hidden mdl:flex">
          <p href="#home" className="cursor-pointer mr-6 hover:border-t-[3px] border-dean_blue scroll-smooth" onClick={handleHomeScroll}>HOME</p>
          <p className="cursor-pointer mr-6 hover:border-t-[3px] border-dean_blue scroll-smooth" onClick={handleAboutScroll}>ABOUT</p>
          <p href="#work" className="cursor-pointer mr-6 hover:border-t-[3px] border-dean_blue" onClick={handleWorkScroll}>WORK</p>
          <p href="#skills" className="cursor-pointer mr-6 hover:border-t-[3px] border-dean_blue" onClick={handleSkillScroll}>SKILLS</p>
          <p href="#contact" className="cursor-pointer mr-6 hover:border-t-[3px] border-dean_blue" onClick={handleContactScroll}>CONTACT</p>
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
