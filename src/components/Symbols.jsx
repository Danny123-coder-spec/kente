import React from 'react'
import DraggableSymbol from './DraggableSymbol'
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
import { useDrag } from 'react-dnd'

const Symbols = () => {
    // const [ isDragging , drag] = useDrag({
    //     item: { type: 'icon' },
    //     collect: monitor => ({
    //       isDragging: monitor.isDragging(),
    //     }),
    //   });

    return (
        <div className='p-2 grid grid-cols-3 gap-x-2 gap-y-2'>
            <div className=' flex flex-col items-center bg-[#f5f5f5] hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym1} alt="" className='' />
                </div>
                {/* <div id='icons'>
                    <DraggableSymbol icon="../assets/sym1.png"/>
                </div> */}

                <span className='font-custom text-xs pt-3'>Gye Nyame</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym2} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>osram-ne-nsoromma</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym3} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Sankofa</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym4} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Adinkrahene</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym5} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Dwennimmen</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym6} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Funtumfunefu</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym7} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Nkyinkyim</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym8} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Denkyem</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym9} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Aban</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym10} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Abe Dua</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym11} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Adwoa</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym12} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>	Agyindawuru</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym13} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Akoben</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym1} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Gye Nyame</span>
            </div>
            <div className=' flex flex-col items-center  hover:bg-white hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                <div className='w-10 h-10 resize-contain '>
                    <img src={sym1} alt="" className='' />
                </div>
                <span className='font-custom text-xs pt-3'>Gye Nyame</span>
            </div>
        </div>
    )
}

export default Symbols