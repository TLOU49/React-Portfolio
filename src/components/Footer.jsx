import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-screen'>
      <div className='w-screen h-16 text-white bg-dean_blue flex flex-col text-center justify-center text-[13px] font-semibold'>
        <span>Developed using Reactjs and Tailwind Css</span>
        <span className='flex text-center justify-center'><p><AiOutlineCopyrightCircle className='my-1 mr-1'/></p><p>Dean Mabuela 2023</p></span>
      </div>
    </div>
  )
}

export default Footer
