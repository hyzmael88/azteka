import Image from 'next/image'
import React from 'react'
import banner from '../../../assets/images/home/Store/banner.png'

function Banner() {
  return (
    <div className='w-full  h-[549px] relative'>
        <Image src={banner} alt="" className='w-full h-full rounded-[7px]'/>
        <div className='absolute w-full h-full left-0 top-0 flex flex-col justify-center ml-[24px] gap-4 z-10'>
        <h2 className='uppercase text-white header'>NEW FIRST KIT</h2>
        <p className='text-white font-lato text-[16px] font-bold w-[486px]'>Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
         <div className='flex flex-row gap-10'>
            <button className='bg-[#FFB202] 
             font-lato  text-white rounded-[7px] w-[163px] h-[35px] uppercase '>
                LOREM </button>
            <button className='border-[1px] border-[#FFB202] 
             font-lato  text-white rounded-[7px] w-[163px] h-[35px] uppercase '>
                ipsum </button>
         </div>
        </div>
    </div>
  )
}

export default Banner