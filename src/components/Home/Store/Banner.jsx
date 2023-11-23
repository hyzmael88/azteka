import Image from 'next/image'
import React from 'react'
import banner from '../../../assets/images/home/Store/banner.png'

function Banner() {
  return (
    <div className='w-full  h-[549px] relative'>
        <Image src={banner} alt="" className='w-full h-full object-cover 
        custom-shadow
        rounded-[7px]'/>
        <div className='absolute w-full h-full left-0 top-0 flex flex-col justify-end
        
        md:justify-center md:ml-[24px]
        items-center
        gap-4 z-10'>
        <h2 className='uppercase text-white header text-center md:text-left custom-shadow-text'>NEW FIRST KIT</h2>
        <p className='text-white font-lato text-[16px] text-center font-bold w-[300px] custom-shadow-text md:w-[486px]'>Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
         <div className='flex flex-row gap-4 md:gap-10 mb-8 '>
            <button className='bg-[#FFB202] 
             font-lato  text-white rounded-[7px] w-[163px] h-[35px] uppercase custom-shadow'>
                LOREM </button>
            <button className='border-[1px] border-[#FFB202] 
             font-lato  text-white rounded-[7px] w-[163px] h-[35px] uppercase custom-shadow '>
                ipsum </button>
         </div>
        </div>
    </div>
  )
}

export default Banner