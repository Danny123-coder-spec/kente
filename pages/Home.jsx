import React, { useState, useRef, useEffect } from 'react';
import HomeSideBar from '../components/HomeSideBar';
import HometopBar from '../components/HometopBar';
import { AiOutlinePlus, AiFillCloseCircle, AiOutlineClose  } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5'
import { FiLink2 } from 'react-icons/fi'
import { BiSolidLockAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io'
import { FiMoreVertical } from 'react-icons/fi'
import kent1 from '../assets/kent-1.jpg';
import cus from '../assets/cus.png';
import './Home.css'
import noUser from '../assets/noUser.png';
import crown from '../assets/crown.png'
import s1 from '../assets/stole.png'
import s2 from '../assets/s1.png'
import s3 from '../assets/stole5.png'
import safe from '../assets/shield.png'
import Customize from '../components/customization';
import {
  Button,
  Modal,

  ModalBody,

} from 'reactstrap';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';


import Shirt from '../canvas/Shirt';
import PopUp from '../components/PopUp';
import KenteSash from '../components/KenteSash';

const Home = () => {
  
  const premiumRef = useRef(null);

  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [showVertical, setShowVertical] = useState(false);
  const [show, setShow] = useState(false);
  const [kenteSash, setKenteSash] = useState(false);
  const [primiumClose, setPremiumClose] = useState(false);
  
  useEffect(() => {
    const handleClickPremium = (event) => {
      if(premiumRef.current && !premiumRef.current.contains(event.target) ) {
        setPremiumClose(false);
      }
    };

    document.addEventListener('click', handleClickPremium );
    document.removeEventListener('click', handleClickPremium);
  });

  const handleKente = () => {
    setKenteSash(!kenteSash)
  }

  const handleShow = () => {
    setShow(!show);
  }

  const handleToggleVertical = () => {
    setShowVertical(!showVertical);
  }




  const handleToggle = () => {
    setOpen(!open);
  }

  const toggle = () => {
    setModal(!modal)
  }
  return (
    <div className='bg-[#f5f5f5] h-screen'>
      <div className='flex'>
        <HomeSideBar />
        <div className='flex-1'>
          <HometopBar />
          <div className='main flex flex-col px-5'>
            {/* Recommended template */}
            <div className='template mt-5 bg-[#fff]  w-full p-5 rounded'>
              <div className='flex flex-row items-center justify-between'>
                <h3 className='pb-3 font-bold text-xl'>Recommended Templates</h3>
                <div className='border border-gray-500 px-3 py-1 hover:bg-gray-400 hover:bg-opacity-30 rounded cursor-pointer'>
                  <span className='text-sm'>More templates</span>
                </div>
              </div>
              <div className='grid grid-cols-4  gap-2.5 mt-6'>
                <button
                  onClick={toggle}
                  className='flex flex-col gap-2 py-6 px-2 border border-yellow-400 items-center justify-center rounded-lg'>
                  <AiOutlinePlus className='text-yellow-400' />
                  <span className='text-yellow-400'>New WhiteBoard</span>
                </button>
                <div className='absolute right-[33rem] top-[10.5rem] pl-44'>
                  <span className='text-xs font-medium text-gray-400'>Free</span>
                </div>
                <div className=' flex flex-col gap-2 py-5 cursor-pointer  border border-yellow-400 items-center rounded-lg justify-center'>

                  <img src={s2} alt="" className='w-20 h-20 ' />
                  <div className='w-full h-[0.03rem] bg-yellow-400'></div>
                  <a href='' className='text-gray-500 text-[0.95rem] mt-0.5 '>Kente Stole</a>
                </div>
                <div className='absolute bg-[] right-[18rem] top-[10.5rem] pl-44'>
                  <span className='text-xs font-medium text-gray-400'>Free</span>
                </div>
                <div className=' flex flex-col  gap-2 py-5 cursor-pointer  border border-yellow-400 items-center rounded-lg justify-center'>
                  <div className=''>
                    <img src={s3} alt="" className='w-[5rem] h-[5rem]' />
                  </div>
                  <div className='w-full h-[0.03rem] bg-yellow-400'></div>
                  <a href='' className='text-gray-500 text-[0.95rem] mt-0.5'>Graduation Stole</a>
                </div>
                <div className='absolute right-14 top-[10.5rem] ml-48'>
                  <img src={crown} alt="" className='w-4 h-4' />
                </div>
                <div onClick={handleKente} className=' flex flex-col gap-2 py-5 cursor-pointer  border border-yellow-400 items-center rounded-lg justify-center'>
                  <div className=''>
                    <img src={s1} alt="" className='w-20 h-20' />
                  </div>
                  <div className='w-full h-[0.03rem] bg-yellow-400'></div>
                  <a href='' className='text-gray-500 text-[0.95rem] mt-0.5'>Kente Sash</a>

                </div>
                <Modal
                  className='modal'
                  isOpen={kenteSash}
                  handleKente={
                    handleKente
                  }
                  ref={premiumRef}

                >
                  <ModalBody>
                    <div className='bg-white relative p-6 rounded-lg'>

                      <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center
                         gap-x-3 bg-[#f1f1f1] rounded-lg px-3 border border-gray-300 border-opacity-50 py-1'>
                          <FiLink2 />
                          <span>Premium</span>
                        </div>
                        <div className='cursor-pointer hover:bg-yellow-400 hover:bg-opacity-50 hover:rounded-full p-[0.25rem]'>
                          <AiOutlineClose onClick={() => setKenteSash(false)} size={17} />
                        </div>
                      </div>
                      <KenteSash />
                    </div>
                  </ModalBody>

                </Modal>
              </div>
            </div>

            <Modal
              className='modal'
              isOpen={modal}
              toggle={
                toggle
              }

            >
              <ModalBody>
                <div className='bg-white relative p-4 rounded-lg'>
                  <AiFillCloseCircle className='absolute right-4 cursor-pointer ' size={30} onClick={() => setModal(false)} />
                  <Customize />
                </div>
              </ModalBody>

            </Modal>

            <div className='template mt-5 bg-[#fff] w-full p-5 rounded'>
              <h3 className='pb-3 font-bold text-xl'>Recent Documents</h3>
              <div className='grid grid-cols-3 gap-4'>
                <div
                  onClick={handleToggle}
                  onMouseEnter={handleToggleVertical}
                  onMouseLeave={handleToggleVertical}


                  className='flex cursor-pointer flex-col gap-2 border border-yellow-400 items-center justify-center rounded-lg relative h-48 overflow-hidden transition-all duration-300 ease-linear'>
                  <img src={kent1} className='object-contain' />
                  <div className='absolute z-10  inset-0 bg-yellow-400 opacity-50 hover:opacity-30'>

                  </div>
                </div>

                <Modal
                  className='mode'
                  isOpen={open}
                  handleToggle={
                    handleToggle
                  }

                >
                  <ModalBody>
                    <PopUp />

                  </ModalBody>

                </Modal>



                <div
                  onClick={handleToggle}
                  className='flex cursor-pointer flex-col gap-2 border border-yellow-400 items-center justify-center rounded-lg relative h-48 overflow-hidden'>
                  <img src={kent1} className='object-contain' />
                  <div className='absolute inset-0 bg-yellow-400 opacity-50 hover:opacity-30'>

                  </div>
                </div>
                <Modal
                  className='mode'
                  isOpen={open}
                  handleToggle={
                    handleToggle
                  }

                >
                  <ModalBody>
                    <PopUp />

                  </ModalBody>

                </Modal>

                <div
                  onClick={handleToggle}
                  className='flex flex-col cursor-pointer gap-2 border border-yellow-400 items-center justify-center rounded-lg relative h-48 overflow-hidden'>
                  <img src={kent1} className='object-contain' />
                  <div className='absolute inset-0 bg-yellow-400 opacity-50 hover:opacity-30'>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
