import React from 'react';
import bg from '../assets/kent.png'
import './Middle.css'

const Middle = () => {
  return (
    <div className='w-1/2 bg-[#f5f5f5] border '>
      <div className='flex items-center justify-center mt-4 perspective'>
        <img src={bg} alt="" className='w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700'/>
      </div>
    </div>
  );
}

export default Middle;
