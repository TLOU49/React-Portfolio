import React from 'react'
import Abouts from '../utils/Abouts'
import Dev from "../assets/webDev.jpg"
import Des from "../assets/webDes.avif"
import Prob from "../assets/prob.jpg"

const About = () => {
  return (
    <div id='about'>
    <div className='flex text-center justify-center text-[2rem] font-semibold my-[6rem]'>
      <h1 className='mdl:flex'>Turning code<p className='text-dean_blue pl-2 flex'>into Digital Dreams</p></h1>
    </div>
    <div className="flex flex-wrap align-center text-center justify-center">
    <Abouts img={Dev} title="Web Developer" text="I love building clones and landing pages"/>
    <Abouts img={Des} title="Web Designer" text="I am profecient in designing visually appealing web designs"/>
    <Abouts img={Prob} title="Problem Solver" text="I am a great problem solver. I love solving problems related to coding "/>
    </div>
    <p className='p-6 text-[13px] text-gray-500'>I am a Fullstack web developer and I have been programming for 1 year. I am Focused on expanding my knowledge and my abilities in programming and quality assurance. I enjoying creating, both in web development and arts. I also enjoy writing expressive code that speaks to both developers and domain experts of any level and creating simplified Software to enhance user interaction and Experience .</p>
    </div>

  )
}

export default About
