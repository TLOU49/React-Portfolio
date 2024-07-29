import React from "react";
import Skill from "../utils/Skill";
import HTML from "../assets/html5.webp"
import CSS from "../assets/CSS3.jpg"
import Reactp from "../assets/react.png"
import Redux from "../assets/redux.webp"
import TW from "../assets/TW.jpg"
import BS from "../assets/bootstrap.avif"
import Next from "../assets/next.webp"
import Node from "../assets/Node.jpg"
import Git from "../assets/git.jpg"
import Net from "../assets/net.png"
import Firebase from "../assets/firebase.jpg"


const Skills = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap text-center justify-center">
        <Skill image={HTML} name="HTML5" />
        <Skill image={CSS} name="CSS3" />
        <Skill image={Reactp} name="React js" />
        <Skill image={Net} name="ASP.NET" />
        <Skill image={Redux} name="Redux" />
        <Skill image={Firebase} name="Firebase" />
        <Skill image={TW} name="Talwind css" />
        <Skill image={BS} name="Bootstrap" />
        <Skill image={Next} name="Next js" />
        <Skill image={Node} name="Node js" />
        <Skill image={Git} name="Git" />
        {/* <Skill image={JS} name="JavaScript" />
        <Skill image={JS} name="JavaScript" /> */}
      </div>
      </div>
  );
};

export default Skills;
