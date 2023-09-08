import React from "react";

const Abouts = ({img, text, title}) => {
  return (
      <div className=" w-56 h-56 ml-4 mdl:ml-16 hover:-translate-y-1 hover:scale-110 duration-300 ease-in-out">
        <span className="">
          <img
          height={0} width={250}
            src={img}
            alt=""
            className="m-1 rounded-md "
          />
        </span>
        <p className="font-semibold text-center ">{title}</p>
        <p className="text-[10px] text-center text-gray-400">{text}</p>
      </div>
  );
};

export default Abouts;
