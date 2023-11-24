import Image from 'next/image'
import React from 'react'
import stream from '../../../../assets/images/home/Streaming/stream.png' 
import { FaTwitch } from 'react-icons/fa'

function Stream() {
  return (
    <div className='w-full h-full flex flex-col items-start md:items-center '>
      <div className='flex md:hidden items-center'>
        <h3 className='header text-[34px] md:text-[48px] custom-shadow-text'>MORATOMICA</h3> <FaTwitch className='custom-shadow-text text-purple-500 text-[28px] md:ext-[32px]'/>
       
        </div>
        <p className='font-lato text-[16px] mb-4 md:hidden custom-shadow-text'>11K SEGUIDORES
    </p>
    <div className='w-full h-[200px] md:h-[350px] lg:h-[500px] '>

        <Image src={stream} alt='stream-image' className='
        w-full 
        h-full
        custom-shadow
        rounded-[7px]
        object-cover
        md:object-cover
        lg:object-fill
        xl:object-cover
        '/>
        </div>
    </div>
  )
}

export default Stream