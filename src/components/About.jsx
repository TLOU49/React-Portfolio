import React from "react";
import Abouts from "../utils/Abouts";
import Dev from "../assets/webDev.jpg";
import Des from "../assets/webDes.avif";
import Prob from "../assets/prob.jpg";
import Innovation from "../assets/innovation.png";
import { PiCaretDoubleDownBold } from "react-icons/pi";

const About = () => {
  return (
    <div id="about">
      <div className="flex text-center justify-center text-[2rem] font-semibold my-[6rem]">
        <h1 className="mdl:flex">
          Turning code
          <p className="text-dean_blue pl-2 flex">into Digital Dreams</p>
        </h1>
      </div>
      <div className="flex flex-wrap align-center text-center justify-center">
        <Abouts
          img={Dev}
          title="Web Developer"
          text="I love building clones and landing pages"
        />
        <Abouts
          img={Des}
          title="Web Designer"
          text="I am profecient in designing visually appealing web designs"
        />
        <Abouts
          img={Prob}
          title="Problem Solver"
          text="I am a great problem solver. I love solving problems related to coding "
        />
        <Abouts
          img={Innovation}
          title="Innovative"
          text="I have great, fresh, modern ideas that can push any institution to newer and greater hights. "
        />
      </div>
      <p className="p-6 text-[13px] text-gray-500">
        With the expansion of AI, I still believe that they cannot replace
        humans. The human touch will always be special. The only way AI can
        replace humans is if humans are not innovative enough and lack ideas for
        the future. And I beleive ideas for the future would be humans no longer
        focusing on the technical part of things but creating new ideas that
        save their clients time, resources and benefits them in other ways. ie
        <p className="font-bold py-6 text-dean_blue">
          Instead of just a simple plain website, companies can think of
          innovative ways of making clients/customers choose them.
        </p>
        <li>
          Law firms can have an emergency contact button that also sends
          client's location for when a client is in serious danger/legal
          trouble. Or for when their rights are being violeted in police
          stations. This benefits both the user and company since the company
          can charge emergency/outside working hours fees
        </li>
        <li>
          Construction companies can have a page where you can calculate the
          approximate material and costs that will be needed and customers will
          contact them when they are certain about choosing them. This saves
          them the time and resources of going in to do a physical quotation
          then the customer ends up going with another constructor.
        </li>

        <span className="flex flex-col text-center justify-center">
        <a href="#contact" className="my-4 font-semibold text-[14px]">Hit me up and let's create amazing ideas </a>
        <a href="#contact" className=" flex text-center  justify-center"><PiCaretDoubleDownBold className="animate-bounce text-[2rem] h-10 w-10  text-dean_blue hover:bg-dean_blue hover:text-white rounded-full p-1" /></a>
        </span>
      </p>
    </div>
  );
};

export default About;
