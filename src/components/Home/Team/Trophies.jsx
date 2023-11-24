import React from 'react'
import trophie from '../../../assets/images/home/Trophies/1.png'     
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';

function Trophies() {

    const trophieArray = [];

for (let i = 0; i < 5; i++) {
  trophieArray.push(
    <Image key={i} src={trophie} alt='trophie' className='w-[59px] custom-shadow md:w-[102px] h-[110px] md:h-[190px] object-contain' />
  );
}
    

  return (
    <div className='w-full  flex flex-col xl:flex-row xl:ml-8 mt-20 '>
        <div className='w-full h-full flex gap-3 justify-center xl:justify-start '>
{/* Trophies */}
    {trophieArray}
   

        </div>
        <div className='w-full h-full flex flex-col items-center xl:items-start mt-4 xl:mt-0 '>
            <h3 className='header text-[23px] custom-shadow-text  text-center xl:text-left'>
                los mas grandes
            </h3>
            <p className='text-white custom-shadow-text font-lato font-bold text-[16px] md:text-[16px] xl:text-[16px] 
            w-[354px] md:w-[550px] xl:w-[497px]
            text-center xl:text-left
            mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
Duis aute irure dolor in reprehenderit in voluptate velit. 
            </p> 
        </div>
    </div>
  )
}

export default Trophies