import React, { useState } from "react";
import { BsGrid3X2 } from "react-icons/bs";
import {BiSearch} from 'react-icons/bi'

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
    <div className="w-1/4 bg-[#f5f5f5] p-3">
      <div className="flex flex-row items-center gap-x-4 ">
        <div className=" border border-gray-400  shadow-lg ease-in-out ">
          <select
            name=""
            id=""
            className="w-[15rem] text-gray-500 font-custom group-hover:block focus:outline-none bg-gray-100 p-2 "
          >
            <option value="">Components</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <BsGrid3X2 size={24} className="text-gray-700" />
        </div>
      </div>
      <div className="mt-3 flex flex-row gap-x-1 items-center bg-white p-1 border border-gray-500" >
        <input type="text" placeholder="Search Symbols" value={input} onChange={(e) => setInput(e.target.value)} className="outline-none bg-transparent w-[17rem] "/>
        <BiSearch color="" size={20} className="hover:transform hover:scale-105 transistion transform duration-75"/>
      </div>
      
        {/* {hover ? <div className="p-2 bg-white  font-custom rounded-sm  ">Show Details</div> : null}
     */}
    </div>
  );
};

export default Right;
