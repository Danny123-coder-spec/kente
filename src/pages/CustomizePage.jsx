import React from 'react';
import SideBar from '../components/SideBar';
import Middle from '../components/Middle';
import Right from '../components/Right';
import Top from '../components/Top';

const CustomizePage = () => {
  return (
    <div className=''>
        <Top/>

      <div className='flex mt-[0.16rem] gap-x-[0.16rem]'>
        
        <Middle/>
        <Right/>
      </div>
    </div>
  );
}

export default CustomizePage;
