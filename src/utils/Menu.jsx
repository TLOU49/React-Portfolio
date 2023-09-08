import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Menu = ({setMenuOpen}) => {
   
  return (
    <div>
      <div className='w-80 h-screen bg-white  text-[1rem] text-gray-400'>
        <span className='absolute right-0 p-6 text-dean_blue text-[1.2rem] ' onClick={()=>setMenuOpen(false)}>
        <AiOutlineClose />
        </span>
      <span className="">
          <h3 className="pt-[4rem] pl-4 ">HOME</h3>
          <h3 className="pl-4 py-4">ABOUT</h3>
          <h3 className="pl-4 py-4">WORK</h3>
          <h3 className="pl-4 py-4">SKILLS</h3>
          <h3 className="pl-4 py-4">CONTACT</h3>
        </span>
      </div>
    </div>
  )
}

export default Menu
