import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Menu = ({setMenuOpen}) => {
  const handleHomeScroll = () =>{
    const height = window.scrollY;
    console.log(height);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
  const handleAboutScroll = () =>{
    const height = window.scrollY;
    console.log(height);
   window.scrollTo({ top: 800, behavior: 'smooth'});
  }
  const handleWorkScroll = () =>{
   window.scrollTo({ top: 1909.60, behavior: 'smooth'});
  }
  const handleSkillScroll = () =>{
    window.scrollTo({ top: 2660.19, behavior: 'smooth'});
  }
  const handleContactScroll = () =>{
    const height = window.scrollY;
    console.log(height);
    window.scrollTo({ top: 3200.2, behavior: 'smooth'});
  }
   
  return (
    <div>
      <div className='w-80 h-screen bg-white  text-[1rem] text-gray-400 '>
        <span className='absolute right-0 p-6 text-dean_blue text-[1.2rem] ' onClick={()=>setMenuOpen(false)}>
        <AiOutlineClose />
        </span>
      <span className="flex flex-col">
          <p href='#home' className="cursor-pointer pt-[4rem] pl-4 " onClick={()=>setMenuOpen(false)}><p onClick={handleHomeScroll}>HOME</p></p>
          <p href='#about' className="cursor-pointer pl-4 py-4" onClick={()=>setMenuOpen(false)}><p onClick={handleAboutScroll}>ABOUT</p></p>
          <p href='#work'className="cursor-pointer pl-4 py-4" onClick={()=>setMenuOpen(false)}><p onClick={handleWorkScroll}>WORK</p></p>
          <p href='#skills' className="cursor-pointer pl-4 py-4" onClick={()=>setMenuOpen(false)}><p onClick={handleSkillScroll}>SKILLS</p></p>
          <p href='#contact' className="cursor-pointer pl-4 py-4" onClick={()=>setMenuOpen(false)}><p onClick={handleContactScroll}>CONTACT</p></p>
        </span>
      </div>
    </div>
  )
}

export default Menu
