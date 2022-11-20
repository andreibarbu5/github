import React from "react";
import { FaStamp } from "react-icons/fa";

const User = ({ title, photo }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className=" w-16 h-16 flex">
        <img src={photo} alt="" className="object-cover rounded-full" />
      </div>
      <div className="  ">
        <p className="font-medium text-[#a3247b]">{title}</p>
        <div className="flex items-center">
          <FaStamp />
          <p className="ml-2 ">3D Game</p>
        </div>
      </div>
    </div>
  );
};

export default User;
