import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/Logo/logo.png'
import { FaArrowUp, FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'



function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
<div className='flex md:hidden flex-col items-center justify-center
 w-full h-full bg-[#08101D]'>
  <div>
  <Image src={logo} alt='logo' className='w-[247px] h-[223px] object-contain mt-8'/>
  </div>
  <div className='w-full flex flex-row justify-around items-center mt-8'>
  <FaTwitch className='text-white text-[30px] mr-[16px]'/>
          <FaYoutube className='text-white text-[30px] mr-[16px]'/>
          <FaFacebook className='text-white text-[30px] mr-[16px]'/>
          <FaInstagram className='text-white text-[30px] mr-[16px]'/>
          <FaTwitter className='text-white text-[30px] mr-[16px]'/>
          <FaTiktok className='text-white text-[30px] mr-[16px]'/>
          
  </div>
  <div className='flex flex-col items-center gap-8 mb-8 mt-8'>
                    <span className='text-white font-lato font-bold text-[16px] uppercase'>Home</span>
                    <span className='text-white font-lato font-bold text-[16px] uppercase'>Shop</span>
                    <span className='text-white font-lato font-bold text-[16px] uppercase'>Events</span>
                    <span className='text-white font-lato font-bold text-[16px] uppercase'>Teams</span>
                     
  </div>
  <div className='flex flex-row justify-center items-center mb-4 mt-4'> 
    <div 
    onClick={scrollToTop}
    className='rounded-full w-[95px] h-[95px] flex justify-center items-center bg-[#21ECB5]'>
      <FaArrowUp
       className='text-[#070B12] text-[40px] '/>
    </div>
  </div>
  <div className='bg-black  text-white flex flex-row justify-center
   items-center  w-full h-[77px]'>
          <h2 className='header text-[20px] md:text-[26px] text-center'>Designed by jaizmora digital media</h2>
        </div>

 

</div>

    <div className='hidden md:flex w-full h-[550px] bg-[#08101D] relative '>
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
    </>
  )
}

export default Footer