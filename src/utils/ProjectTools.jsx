import React from "react";
import Projects from "../components/Projects";

const ProjectTools = () => {
  return (
    <div>
      <div className="flex flex-wrap text-center justify-center">
        <Projects
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--hVEzcOtz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y3dzji1cyo10pfnxs0m4.jpg"
          title="Netflix Landing Page"
          description="Built with HTML & CSS"
          codeLink="https://github.com/TLOU49/Netflix-landing-page"
          projectLink="https://netflix-landingpage-dean.netlify.app/"
        />
        <Projects
          image="https://recorder.easeus.com/images/en/screen-recorder/resource/youtube.png"
          title="YouTube Landing Page"
          description="Built with HTML & CSS"
          codeLink="https://github.com/TLOU49/Google-Keep-Firebase"
          projectLink="https://youtube-zaio.netlify.app/"
        />
        <Projects
          image="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/faab797a-b8cb-4ec3-a641-3a69dda8e0f9.png"
          title="Google Keep JS & Firebase"
          description="Built with HTML,CSS, Vanilla JS & Firebase"
          codeLink="https://github.com/TLOU49/zaio-git-youtube"
          projectLink="https://google-keep-fireb.netlify.app/"
        />
        <Projects
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppOFpXlltQXGyGFXwsyKIrv6k8tWrmw5vn2gpLEjU_jJLvoQaQQCYPR_Onp3mGKUCMJU&usqp=CAU"
          title="Tic Tac Toe game"
          description="Built with ReactJS"
          codeLink="https://github.com/TLOU49/react-tic-tac-toe"
          projectLink="https://tictactoe-dean.netlify.app"
        />
      </div>
    </div>
  );
};

export default ProjectTools;
