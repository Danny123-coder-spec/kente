import React, { useState } from "react";
import copy from "../assets/copy.png";
import del from "../assets/del.png";
import redo from "../assets/redo.png";
import undo from "../assets/undo.png";
import share from '../assets/shar.png'
import user from '../assets/user.png'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import tri from '../assets/bleach.png'
import { BsTriangleFill } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'

const Top = () => {
  const [view, setView] = useState(false);

  const handleClickUser = () => {
    setView(!view);
  }



  const handleType = (count) => {
    // access word count number
    // console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <>
      {/* <div className="bg-white shadow-2xl p-3 w-full ">
        <h3 className="text-xl text-center font-custom text-yellow-500 font-semibold">
          Customize Your Kente Cloth 
        </h3>

      </div> */}
      <div className=" bg-[#f5f5f5]  object-center ">

        <div className="flex flex-row items-center p-2 justify-center gap-x-[2.8rem]  border border-gray-300 border-opacity-30">
          <div className=" resize-contain ">
            <img src={logo} alt="" className="h-10 w-12 cursor-pointer resize-contain" />
          </div>
          <div className="w-72">
            {/* <h3 className="text-lg text-center font-custom text-yellow-500 font-semibold">
              Customize Your Kente Cloth
            </h3> */}
            <span className="text-lg font-custom font-bold text-red-600">

              <Typewriter
                words={['Welcome to our Kente Cloth', 'Customize Your Kente Cloth', 'Personalize Your Kente Cloth', 'Craft Your Welcoming Kente']}
                loop={''}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </div>
          <div className="h-6 w-6 resize-contain gap-y-4">
            <img src={copy} alt="" className="cursor-pointer" />
          </div>
          {/* <div className="w-[0.06rem] h-[3rem] bg-gray-300 bg-opacity-50"></div> */}
          <div className="h-6 w-6 resize-contain">
            <img src={del} alt="" className="cursor-pointer" />
          </div>
          {/* <div className="w-[0.06rem] h-[2.5rem] bg-gray-300 bg-opacity-50"></div> */}
          <div className="flex flex-row items-center gap-x-6 bg-white px-5 py-2 rounded-md border border-gray-400 border-opacity-30">
            <div className="h-5 w-5 resize-contain">
              <img src={undo} alt="" className="cursor-pointer" />
            </div>
            <div className="h-5 w-5 resize-contain">
              <img src={redo} alt="" className="cursor-pointer" />
            </div>
          </div>
          {/* <div className="w-[0.06rem] h-[2.5rem] bg-gray-300 bg-opacity-50"></div> */}
          <div className="flex font-custom flex-row items-center gap-x-1">
            <div className=" border border-gray-500 border-opacity-50 px-6 py-1.5 rounded-md bg-white ">
              <button className="text-sm">Save</button>

            </div>
            <span className="text-sm">or </span>
            <span className="text-sm text-yellow-400">Ctrl S</span>
          </div>
          <div className="font-custom cursor-pointer flex flex-row items-center gap-x-2 border border-gray-500 border-opacity-50 rounded-md px-4 py-2 bg-yellow-400">
            <button className="text-sm">Share</button>
            <div className="w-4 h-4 resize-contain">
              <img src={share} alt="" className="" />
            </div>
          </div>
          <Link to='/' className="font-custom border border-gray-500 border-opacity-50 px-5 py-1.5 rounded-md bg-yellow-400">
            <span className="text-sm">Go Back</span>
          </Link>
          <div className="h-8 w-8 resize-contain " onClick={handleClickUser}>
            <img src={user} alt="" className="cursor-pointer" />
          </div>

        </div>
        <div className="">
          {
            view && (
              <div className="w-[10rem] z-10 absolute right-[6.5rem]  top-12 transform translate-x-1/2 bg-[#393A34] border rounded shadow-lg">
                {/* <div className=" absolute -top-2 left-36  w-4 h-4 transform -translate-x-1/2 -mt-1">
                  <BsTriangleFill color="#393A34" />
                </div> */}
                <div className=" flex  text-sm flex-col font-custom cursor-pointer text-white">
                  <Link to='/' className="hover:bg-red-700 p-2.5" >Go to Home</Link>
                  <div className="bg-white w-full h-[0.25px]"></div>
                  <span className="hover:bg-red-700 p-2.5">Logout</span>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Top;
