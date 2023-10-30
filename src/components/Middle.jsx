import React, { useEffect, useState } from 'react';
import bg from '../assets/kent.png'
import './Middle.css'
import { Link } from 'react-router-dom';
import Bin from './Bin';
import Note from './Note';

const Middle = () => {
  const [notes, setNotes] = useState([]);
  const [binnedItems, setBinnedItems] = useState([]);

  useEffect(() => {
    const initialNotes = ["Note 1", "Note 2", "Note 3"];
    localStorage.setItem("notesList", JSON.stringify(initialNotes))

    let array = localStorage.getItem('notesList');
    setNotes(JSON.parse(array));
    console.log(notes)
  }, []);

  useEffect(() => {
    let array = localStorage.getItem("binnedItem");

    if (array) {
      setBinnedItems(JSON.parse(array));
      for (let i = 0; i < notes.length; i++) {
        for (let j = 0; j < binnedItems.length; j++) {
          if (notes[i] === binnedItems[j]) {
            notes.splice(i, 1)
          }
        }
      }
    }
  }, [])
  return (
    <div className='flex-1 bg-[#f5f5f5] border border-gray-300 border-opacity-30 h-screen '>
      {/* <div className='flex items-center justify-center mt-4 perspective'>
        <img src={bg} alt="" className='w-96 h-96 hover:transform hover:rotate-left-right hover:scale-105 transition-transform duration-700' />
      </div> */}
      {notes.map((item, index) =>
        <Note
          key={index}
          note={item}
          binnedItems={binnedItems}
        />
      )}
      <Bin binnedItems={binnedItems} />
      {/* <div className="flex items-center justify-center font-custom border w-1/4 border-gray-500 border-opacity-50 px-4 py-1 text-center rounded-md bg-yellow-400">
        <span className=''>Order Now</span>
      </div> */}
    </div>
  );
}

export default Middle;
