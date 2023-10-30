import React, { useState } from "react";
import { BsGrid3X2 } from "react-icons/bs";
import { BiSearch } from 'react-icons/bi'
import tri from '../assets/bleach.png'
import Symbols from "./Symbols";

const Right = () => {
  const [dropDownOpen, setDropDown] = useState(false);
  const [hover, setHover] = useState(false);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setDropDown(!dropDownOpen);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="w-1/4   h-screen border border-gray-300 border-opacity-30">
      <div className="bg-[#f5f5f5] p-3">
        <div className="flex flex-row items-center gap-x-4 ">
          <div className=" border border-gray-400 border-opacity-30  cursor-pointer ease-in-out rounded-sm ">
            <select
              name=""
              id=""
              className="w-[15.5rem] text-sm text-gray-400 cursor-pointer font-custom group-hover:block focus:outline-none border-gray-300 bg-gray-100 p-2 "
            >
              <option value="">Components</option>
              <option value="">Kente Stool</option>
              <option value="">Kente Symbols</option>
              <option value=""></option>
            </select>
          </div>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <BsGrid3X2 size={24} className="text-gray-500 cursor-pointer" />
            <div className="">
              {
                hover && (
                  <div className="w-[12rem] absolute right-24  top-8 transform translate-x-1/2 bg-white p-2 border rounded shadow-lg">
                    <div className=" absolute -top-2 left-44  w-4 h-4 transform -translate-x-1/2 -mt-1">
                      <img src={tri} alt="" />
                    </div>
                    <span className="font-custom">Switch to detail view</span>

                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-x-1 items-center bg-white p-1 border border-gray-400 border-opacity-50 rounded-sm" >
          <input type="text" placeholder="Search Symbols" value={input} onChange={(e) => setInput(e.target.value)} className="outline-none bg-transparent w-[17rem] text-sm p-1.5 " />
          <BiSearch color="" size={20} className="hover:transform hover:scale-105 transistion transform duration-75 text-gray-400" />
        </div>
      </div>
      <div className="bg-[#E6E7EB] ">
        <Symbols />
      </div>

      {/* {hover ? <div className="p-2 bg-white  font-custom rounded-sm  ">Show Details</div> : null}
     */}
    </div>
  );
};

export default Right;
