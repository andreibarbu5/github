import React from "react";
import logo from "../assets/github.png";
import { FiMenu } from "react-icons/fi";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const buttons = [
    { title: "Code", arrow: true },
    { title: "Help", arrow: true },
    { title: "Collab", arrow: true },
    { title: "Plans", arrow: false },
  ];
  return (
    <div className="bg-[#24292f] fixed top-0 w-full">
      <div className="flex justify-between items-center py-2 px-4 lg:px-10  text-white lg:w-[90vw]  xl:w-[75vw] mx-auto ">
        {/* Left */}
        <div className="relative  w-12 h-12 flex items-center   ">
          <img src={logo} alt="" className="  object-cover   " />
          <ul className="hidden lg:flex space-x-7 pl-10">
            {buttons.map((button) => (
              <NavBtn
                title={button.title}
                arrow={button.arrow}
                key={button.title}
              />
            ))}
          </ul>
        </div>
        {/* Middle */}
        <div className="lg:flex items-center justify-end gap-4  lg:w-full lg:max-w-[40rem] whitespace-nowrap   ">
          <input
            type="search"
            placeholder="Search"
            className=" rounded-[0.25rem] p-1.5 outline-0 pl-4 text-black  lg:w-[14rem] xl:w-[20rem]"
          />
          <div className="hidden lg:flex space-x-4 text-[#24292f] ">
            <button className=" py-1.5 px-2.5 bg-white rounded-[0.6rem] font-semibold hover:text-white hover:bg-[#24292f] duration-100 ease-out">
              Log in
            </button>
            <button className="p-1.5 px-2.5 bg-white rounded-[0.6rem] font-semibold hover:text-white hover:bg-[#24292f] duration-100 ease-out">
              Log out
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="lg:hidden  text-[24px]">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
