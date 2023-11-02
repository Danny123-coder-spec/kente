import React from 'react';
import HomeSideBar from '../components/HomeSideBar';
import HometopBar from '../components/HometopBar';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import kent1 from '../assets/kent-1.jpg';

const Home = () => {
  return (
    <div className='bg-[#f5f5f5] h-screen'>
        <div className='flex'>
              <HomeSideBar />
              <div className='flex-1'>
                <HometopBar />
                <div className='main flex flex-col px-5'>
                  {/* Recommended template */}
                    <div className='template mt-5 bg-[#fff] w-full p-5 rounded'>
                     <h3 className='pb-3 font-bold text-xl'>Recommended Templates</h3>
                      <div className='grid grid-cols-2'>
                        <Link
                        to='/whiteboard'
                         className='flex flex-col gap-2 py-6 px-2 border border-yellow-400 items-center justify-center rounded-lg'>
                          <AiOutlinePlus className='text-yellow-400'/>
                          <span className='text-yellow-400'>New WhiteBoard</span>
                        </Link>
                      </div>
                    </div>

                    <div className='template mt-5 bg-[#fff] w-full p-5 rounded'>
                     <h3 className='pb-3 font-bold text-xl'>Recent Documents</h3>
                      <div className='grid grid-cols-3 gap-4'>
                        <Link
                        to='/whiteboard'
                         className='flex flex-col gap-2 border border-yellow-400 items-center justify-center rounded-lg relative h-48 overflow-hidden transition-all duration-300 ease-linear'>
                          <img src={kent1} className='object-contain'/>
                          <div className='absolute inset-0 bg-yellow-400 opacity-80 hover:opacity-50'>
                          </div>
                        </Link>
                        <Link
                        to='/whiteboard'
                         className='flex flex-col gap-2 border border-yellow-400 items-center justify-center rounded-lg relative h-48 overflow-hidden'>
                          <img src={kent1} className='object-contain'/>
                          <div className='absolute inset-0 bg-yellow-400 opacity-80 hover:opacity-50'>

                          </div>
                        </Link>
                        <Link
                        to='/whiteboard'
                         className='flex flex-col gap-2 border border-yellow-400 items-center justify-center rounded-lg relative h-48 overflow-hidden'>
                          <img src={kent1} className='object-contain'/>
                          <div className='absolute inset-0 bg-yellow-400 opacity-80 hover:opacity-50'>

                          </div>
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
        </div>
    </div>
  );
}

export default Home;
