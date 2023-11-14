import React, { useEffect, useState } from 'react';
import bg from '../assets/stole.png'
import './Middle.css'
import { useDrop } from 'react-dnd';

import Note from './Note';
import SelectedImage from './Bin';
import sym1 from '../assets/sym1.png'
import sym2 from '../assets/sym2.png'
import sym3 from '../assets/sym3.png'
import sym4 from '../assets/sym4.png'
import sym5 from '../assets/sym5.png'
import sym6 from '../assets/sym6.png'
import sym7 from '../assets/sym7.png'
import sym8 from '../assets/sym8.png'
import sym9 from '../assets/sym9.png'
import sym10 from '../assets/sym10.png'
import sym11 from '../assets/sym11.png'
import sym12 from '../assets/sym12.png'
import sym13 from '../assets/sym13.png'
import sym14 from '../assets/sym14.png'
import sym15 from '../assets/sym15.png'
import sym16 from '../assets/sym16.png'
import sym17 from '../assets/sym17.png'
import sym18 from '../assets/sym18.png'
import sym19 from '../assets/sym19.png'
import sym20 from '../assets/sym20.png'
import sym21 from '../assets/sym21.png'
import Symbol from './Symbol';
// import sym18 from '../assets/sym18.png'
// import sym18 from '../assets/sym18.png'




const Middle = ({ images, selectedStoleId, img, id }) => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "symbol",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };



  const selectedImage = selectedStoleId
    ? images.find((data) => data.id === selectedStoleId)
    : null;

  return (
    <div ref={drop} style={{
      backgroundColor: isOver ? "#fbb" : "",
    }} className='flex-1 bg-[#f5f5f5] border border-gray-300 border-opacity-30  '>
      <div className='flex flex-col items-center justify-center mt-20 '>
        {selectedImage ? (
          <img src={selectedImage.img} alt="Selected Stole" className="resize-contain w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="flex  items-center justify-center  perspective">
            <img src={bg} alt="Selected Stole" className="resize-contain w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700" />
          </div>
        )}
        {/* <div className='bg-yellow-400 mt-10 py-2.5 flex justify-center items-center px-4 w-[10rem] rounded-lg'>
        <span>Order Now</span>
      </div> */}
        <div>
          {

          }
        </div>
      </div>
    </div>
  );
}

export default Middle;