import React from 'react'
import hero from '../../assets/images/store/hero.png'
import Image from 'next/image'
import Button from '../Home/Streaming/Creators&Events/Button'

function Hero() {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-screen relative'>

        <Image src={hero} alt='hero' className='w-full h-screen object-cover custom-shadow'/>
        <div className='w-full h-full absolute top-0 z-10 flex flex-col justify-center items-center pt-[300px]'>
            <Button titulo="PREORDENAR"  />
        </div>
        </div>
    </div>
  )
}

export default Hero