import React from 'react'
import TitulosStream from '../Titulos/TitulosStream'
import img1 from '../../../../assets/images/home/Streaming/11.png'
import img2 from '../../../../assets/images/home/Streaming/12.png'
import img3 from '../../../../assets/images/home/Streaming/13.png'
import img4 from '../../../../assets/images/home/Streaming/14.png'
import Image from 'next/image'
import Button from './Button'

function Creators() {

    const images = [
        {image: img1},
        {image: img2},
        {image: img3},
        {image: img4},

    ]

  return (
    <div className='w-full h-full'>
        <TitulosStream titulo = "MAS CREADORES" />
        <div className='w-full h-full grid grid-cols-2 gap-4 mt-2'>
            {
               images.map((image, index) => {
                   return(
                       <div key={index} className='w-full h-full'>
                           <Image src={image.image} alt="" className='w-full h-[161px] rounded-[7px]'/>
                       </div>
                   )
               })
            }
        </div>
        <div className='w-full flex flex-row justify-center items-center mt-2'>
            <Button
            titulo = "Conocer"
            />
        </div>
    </div>
  )
}

export default Creators