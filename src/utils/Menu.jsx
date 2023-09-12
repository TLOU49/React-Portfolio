import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Menu = ({setMenuOpen}) => {
   
  return (
    <div>
      <div className='w-80 h-screen bg-white  text-[1rem] text-gray-400 '>
        <span className='absolute right-0 p-6 text-dean_blue text-[1.2rem] ' onClick={()=>setMenuOpen(false)}>
        <AiOutlineClose />
        </span>
      <span className="flex flex-col">
          <a href='#home' className="pt-[4rem] pl-4 " onClick={()=>setMenuOpen(false)}>HOME</a>
          <a href='#about' className="pl-4 py-4" onClick={()=>setMenuOpen(false)}>ABOUT</a>
          <a href='#work'className="pl-4 py-4" onClick={()=>setMenuOpen(false)}>WORK</a>
          <a href='#skills' className="pl-4 py-4" onClick={()=>setMenuOpen(false)}>SKILLS</a>
          <a href='#contact' className="pl-4 py-4" onClick={()=>setMenuOpen(false)}>CONTACT</a>
        </span>
      </div>
    </div>
  )
}

export default Menu
