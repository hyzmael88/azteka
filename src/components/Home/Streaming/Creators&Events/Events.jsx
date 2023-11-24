import React from 'react'
import TitulosStream from '../Titulos/TitulosStream'
import img1 from '../../../../assets/images/home/Streaming/event1.jpeg'
import img2 from '../../../../assets/images/home/Streaming/event2.jpeg'
import Image from 'next/image'
import Button from './Button'

function Events() {
    const images = [
        {image: img1},
        {image: img2},

    ]
  return (
    <div className='w-full h-full'>
        <TitulosStream titulo = "TOP EVENTS"/>
        <div className='w-full h-full grid grid-cols-1 gap-4 mt-2'>
        {
               images.map((image, index) => {
                   return(
                       <div key={index} className='w-full h-full'>
                           <Image src={image.image} alt="" className='
                           custom-shadow
                           w-full h-[161px] 
                           object-cover
                           rounded-[7px]'/>
                       </div>
                   )
               })
            }
            </div>
            <div className='w-full flex flex-row justify-center items-center mt-2'>
            <Button
            titulo = "Descubrir"
            />
        </div>
    </div>
  )
}

export default Events