import React from 'react'
import Abouts from '../utils/Abouts'
import Dev from "../assets/webDev.jpg"
import Des from "../assets/webDes.avif"
import Prob from "../assets/prob.jpg"

const About = () => {
  return (
    <div>
    <div className='flex text-center justify-center text-[2rem] font-semibold my-[6rem]'>
      <h1 className='mdl:flex'>Turning code<p className='text-dean_blue pl-2 flex'>into Digital Dreams</p></h1>
    </div>
    <div className="flex flex-wrap align-center text-center justify-center">
    <Abouts img={Dev} title="Web Developer" text="I love building clones and landing pages"/>
    <Abouts img={Des} title="Web Designer" text="I am profecient in designing visually appealing web designs"/>
    <Abouts img={Prob} title="Problem Solver" text="I love solving problems related to coding"/>
    </div>
    mmmmmmmmmmmm
    </div>

  )
}

export default About
