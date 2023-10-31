import React, { useState } from "react";
import { BsGrid3X2 } from "react-icons/bs";
import { BiSearch } from 'react-icons/bi'
import tri from '../assets/bleach.png'
import Symbols from "./Symbols";
import { BsTriangleFill } from 'react-icons/bs'
import { BsGrid1X2 } from 'react-icons/bs'
import Details from "./Details";


const Right = () => {
  const [dropDownOpen, setDropDown] = useState(false);
  const [hover, setHover] = useState(false);
  const [select, setSelect] = useState('kente Symbols')
  const [compact, setCompact] = useState(false);
  // const [input, setInput] = useState('');
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleToggle = () => {
    setDropDown(!dropDownOpen);
  };


  const handleSelectChange = (e) => {
    setSelect(e.target.value)
  }

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setToggle(!toggle)
  }

  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm)

  return (
    <div className="w-1/4   border border-gray-300 border-opacity-30">
      <div className="bg-[#f5f5f5] p-3">
        <div className="flex flex-row items-center gap-x-4 ">
          <div className=" border border-gray-400 border-opacity-30  cursor-pointer ease-in-out rounded-sm ">
            <select
            value={select}
            onChange={handleSelectChange}
              name=""
              id=""
              className="w-[15.5rem] text-sm text-gray-400 cursor-pointer font-custom group-hover:block focus:outline-none border-gray-300 bg-gray-100 p-2 "
            >
              <option value="">Elements</option>
              <option value="" >Kente Stole</option>
              <option value="">Kente Symbols</option>
              
            </select>
          </div>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>


            <div onClick={handleClick}>
              {
                toggle ? (
                  <BsGrid3X2 size={24}
                    className="text-gray-500 cursor-pointer"  />
                ) : (
                  <BsGrid1X2 size={24}
                  className="text-gray-500 cursor-pointer" />
                )
              }

            </div>

            <div className="">
              {
                hover && (
                  <div className="w-[12rem] absolute z-10 right-24  top-8 transform translate-x-1/2 bg-[#393A34] p-2 border rounded shadow-lg">
                    <div className=" absolute -top-2 left-44  w-4 h-4 transform -translate-x-1/2 -mt-1">
                      <BsTriangleFill color="#393A34" />
                    </div>
                    {
                      toggle ? (
                        <span className="font-custom text-white text-center text-sm">Switch to detail view</span> 

                      ) : (
                        <span className="font-custom text-white text-center text-sm">Switch to compact view</span> 
                      )
                    }

                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-x-1 items-center bg-white p-1 border border-gray-400 border-opacity-50 rounded-sm" >
          <input type="text" placeholder="Search Symbols..."  onChange={(e) => setSearchTerm(e.target.value)} className="outline-none bg-transparent w-[17rem] text-sm p-1.5 " />
          <BiSearch color="" size={20} className="hover:transform hover:scale-105 transistion transform duration-75 text-gray-400" />
        </div>
      </div>
      <div className="bg-[#E6E7EB] ">
        {
          toggle ? (
            <div>
              <Symbols searchSymbol={searchTerm}/>
            </div>
          ) : (
            <Details />
          )
        }
      </div>

     
    </div>
  );
};

export default Right;
