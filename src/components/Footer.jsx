import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/Logo/logo.png'

function Footer() {
  return (
    <div className='w-full h-full  bg-[#08101D] '>
        <div className='w-full h-full px-[24px] grid grid-cols-4'>
            <div className='w-full h-full'>
            <Image src={logo} alt='logo' className='w-[247px] h-[223px]'/>
            </div>
            <div className='w-full h-full flex flex-col text-center'>
                <span>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Navigation</p>
                </span>
                </div>
        </div>

    </div>
  )
}

export default Footer