import React from 'react'

const Skill = ({image,name}) => {
  return (
    <div>
      <span className="">
          <span className="flex flex-col text-center justify-center w-20 mx-6  my-3">
            <span className="flex h-20 w-20 rounded-full bg-white ml-6 p-1">
              <img src={image} alt="language" height={150} width={150} className="rounded-full" />
            </span>
            <p className="text-[11px] font-medium py-1 pl-9 text-gray-400">{name}</p>
          </span>
        </span>
    </div>
  )
}

export default Skill
