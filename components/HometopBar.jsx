
import React, { useState, useRef, useEffect } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { CiCircleQuestion, CiGrid41 } from 'react-icons/ci';
import { BsSearch, BsTriangleFill } from 'react-icons/bs';
import { BiSolidUpArrow } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiLink2 } from 'react-icons/fi';
import {AiOutlineClose } from 'react-icons/ai';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import noUser from '../assets/noUser.png';
import ProfilePopUp from './ProfilePopUp';
import {
  Button,
  Modal,

  ModalBody,

} from 'reactstrap';
import KenteSash from './KenteSash';


const HometopBar = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [focus, setFocus] = useState(false);
  const [primuim, setPremium] = useState(false);

  const handlePremium = () => {
    setPremium(!primuim)
  }

  const handleClick = () => {
    setSearch(!search);
  }
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className=' relative w-full px-4 py-3 border-b border-b-[#bbbbbb] flex justify-end '>
      <div className='flex gap-5 items-center mr-3.5'>
        <div className='relative'>
          <BsSearch
            onClick={handleClick}
            size={35}
            data-tooltip-id='search'
            className='cursor-pointer hover:bg-[#E8E8E9] p-[0.45rem] rounded'
          />
          {
            search && (
              <div className=" absolute z-10 right-24  top-10 transform translate-x-1/2 bg-[white] p-2.5 border rounded shadow-lg">
                <div className=" absolute -top-2 left-[12rem]  w-4 h-4 transform -translate-x-1/2 -mt-1">
                  <BsTriangleFill color="white" />
                </div>
                <input
                  placeholder='Search documents'
                  type="text"
                  className={`outline-none 
                 border border-gray-300
                   p-1 text-sm 
                  rounded ${focus && 'border border-gray-700 '}`}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                />

              </div>
            )
          }
        </div>
        <CiGrid41
          size={35}
          data-tooltip-id='grid'
          className='cursor-pointer hover:bg-[#E8E8E9] p-1 rounded'
        />
        <CiCircleInfo
          size={35}
          data-tooltip-id='detail'
          className='cursor-pointer hover:bg-[#E8E8E9] p-1 rounded'
        />
        <CiCircleQuestion
          size={35}
          data-tooltip-id='support'
          className='cursor-pointer text-xl  hover:bg-[#E8E8E9] p-1 rounded'
        />

        <IoNotificationsOutline
          size={35}
          data-tooltip-id='notification'
          className='cursor-pointer text-xl  hover:bg-[#E8E8E9] p-1 rounded'
        />

        <div className='cursor-pointer' ref={profileRef}>
          <img
            src={noUser}
            alt='Avator'
            className='w-9 h-9 object-cover rounded-full'
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div onClick={handlePremium} className='bg-yellow-400 rounded-md px-6 cursor-pointer py-1.5'>
          <span className='font-medium'>Upgrade</span>
        </div>
        <Modal
          className='modal'
          isOpen={primuim}
          handlePremium={
            handlePremium
          }

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
                  <AiOutlineClose onClick={() => setPremium(false)} size={17} />
                </div>
              </div>
              <KenteSash />
            </div>
          </ModalBody>

        </Modal>
      </div>
      {toggle && <ProfilePopUp />}

      <ReactTooltip id='search' place='bottom' content='Search' />
      <ReactTooltip id='grid' place='bottom' content='Grid View' />
      <ReactTooltip id='detail' place='bottom' content='Detail' />
      <ReactTooltip id='support' place='bottom' content='Support' />
      <ReactTooltip id='notification' place='bottom' content='Notification' />
    </div>
  );
};

export default HometopBar;
