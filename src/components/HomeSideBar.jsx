import React from 'react'
import kente from '../assets/kent.png'
import {AiOutlinePlus} from 'react-icons/ai'
import {CiClock2} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { TbSocial } from 'react-icons/tb'

const HomeSideBar = () => {
  return (
    <div className='w-1/3 md:w-1/5 h-screen border border-r-[#bbbbbb]'>
        <div className='flex flex-col items-center p-4 w-full'>
            {/* <img src={kente} className='w-10'/> */}
            <TbSocial size={30} /> 
            <p className='font-bold text-sm'>KenStole</p>
        </div>
        <div className='mt-3 w-full flex justify-center'>
            <Link
            to='/whiteboard'
             className='flex items-center gap-1 font-bold bg-yellow-400 justify-center py-2 px-16 rounded hover:opacity-80 transition-all ease-linear'>
                <AiOutlinePlus />
                <span>New</span>
            </Link>
        </div>

        <div className='flex items-center mt-4 justify-center gap-1 w-full bg-[#E8E8E9] py-2 font-semibold border-4 border-l-[#333] cursor-pointer'>
            <CiClock2 />
            <span>Recent documents</span>
            
        </div>
    </div>
  )
}

export default HomeSideBar
