import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBtn = ({ title, arrow }) => {
  return (
    <div className="flex items-center gap-1 group hover:text-gray-400 duration-100 ease-out">
      <p>{title}</p>
      <MdKeyboardArrowDown className="group-hover:translate-y-[0.15rem] duration-100 ease-out " />
    </div>
  );
};

export default NavBtn;
