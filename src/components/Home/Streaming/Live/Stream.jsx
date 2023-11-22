import Image from 'next/image'
import React from 'react'
import stream from '../../../../assets/images/home/Streaming/stream.png' 

function Stream() {
  return (
    <div className='w-full h-full flex flex-col items-center '>
        <Image src={stream} alt='stream-image' className='w-full h-[350px] bg-blue-600 rounded-[7px]  '/>
    </div>
  )
}

export default Stream