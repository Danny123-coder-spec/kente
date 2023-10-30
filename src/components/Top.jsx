import React from "react";
import copy from "../assets/copy.png";
import del from "../assets/del.png";
import redo from "../assets/redo.png";
import undo from "../assets/undo.png";

const Top = () => {
  return (
    <div className=" bg-[#f5f5f5]  object-center ">
      <div className="flex flex-row items-center justify-center gap-x-20 p-2 border ">
        <div className="h-6 w-6 resize-contain">
          <img src={copy} alt="" />
        </div>
        <div className="w-[0.1rem] h-[2rem] bg-gray-300"></div>
        <div className="h-6 w-6 resize-contain">
          <img src={del} alt="" />
        </div>
        <div className="w-[0.1rem] h-[2rem] bg-gray-300"></div>
        <div className="h-6 w-6 resize-contain">
          <img src={undo} alt="" className="text-gray-500" />
        </div>
        <div className="h-6 w-6 resize-contain">
          <img src={redo} alt="" className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Top;
