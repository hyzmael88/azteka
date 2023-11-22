import Image from 'next/image'
import React from 'react'
import stream from '../../../../assets/images/home/Streaming/stream.png' 
import { FaTwitch } from 'react-icons/fa'

function Stream() {
  return (
    <div className='w-full h-full flex flex-col items-start md:items-center '>
      <div className='flex md:hidden items-center'>
        <h3 className='header text-[34px] md:text-[48px]'>MORATOMICA</h3> <FaTwitch className='text-purple-500 text-[28px] md:ext-[32px]'/>
       
        </div>
        <p className='font-lato text-[16px] mb-4 md:hidden '>11K SEGUIDORES
    </p>
        <Image src={stream} alt='stream-image' className='w-full h-[250px] md:h-[350px] bg-blue-600 rounded-[7px]  '/>
    </div>
  )
}

export default Stream