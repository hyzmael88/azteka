import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/Logo/logo.png'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full h-[550px] bg-[#08101D] relative '>
        <div className='w-full px-[24px] grid grid-cols-4 pt-20'>
            <div className='w-full '>
            <Image src={logo} alt='logo' className='w-[247px] h-[223px] object-contain'/>
            </div>
            <div className='w-full  flex flex-col gap-8 text-center'>
                
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Navigation</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Home</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Shop</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Events</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Teams</p>
                     
                </div>
            <div className='w-full  flex flex-col gap-8 text-center'>
                
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Categories</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Home</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Shop</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Events</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Teams</p>
                     
                </div>
            <div className='w-full  flex flex-col gap-8 text-center'>
                
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>HELP and support</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Home</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Shop</p>
                    <p className='text-white font-lato font-bold text-[16px] uppercase'>Events</p>
                     
                </div>

        </div>
        <div className='w-full flex flex-row justify-center items-center mt-20 gap-4'>
          <FaTwitch className='text-white text-[30px] mr-[16px]'/>
          <FaYoutube className='text-white text-[30px] mr-[16px]'/>
          <FaFacebook className='text-white text-[30px] mr-[16px]'/>
          <FaInstagram className='text-white text-[30px] mr-[16px]'/>
          <FaTwitter className='text-white text-[30px] mr-[16px]'/>
          <FaTiktok className='text-white text-[30px] mr-[16px]'/>
          
        </div>
        
        <div className='bg-black  text-white flex flex-row justify-center items-center absolute bottom-0 w-full h-[77px]'>
          <h2 className='header text-[26px]'>Designed by jaizmora digital media</h2>
        </div>

    </div>
  )
}

export default Footer