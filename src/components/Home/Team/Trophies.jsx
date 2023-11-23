import React from 'react'
import trophie from '../../../assets/images/home/Trophies/1.png'     
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';

function Trophies() {

    const trophieArray = [];

for (let i = 0; i < 5; i++) {
  trophieArray.push(
    <Image key={i} src={trophie} alt='trophie' className='w-[102px] h-[190px] object-contain' />
  );
}
    

  return (
    <div className='w-full  flex flex-col md:flex-row ml-8 mt-20 '>
        <div className='w-full h-full flex gap-3 '>
{/* Trophies */}
    {trophieArray}
   

        </div>
        <div className='w-full h-full flex flex-col '>
            <h3 className='header text-left'>
                los mas grandes
            </h3>
            <p className='text-white font-lato font-bol text-[16px] w-[497px] mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
Duis aute irure dolor in reprehenderit in voluptate velit. 
            </p> 
        </div>
    </div>
  )
}

export default Trophies