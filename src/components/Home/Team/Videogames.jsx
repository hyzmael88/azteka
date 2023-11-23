import React from 'react'
import fortnite from '../../../assets/images/home/Videogames/fortnite.png'
import lol from '../../../assets/images/home/Videogames/lol.png'
import valorant from '../../../assets/images/home/Videogames/valorant.png'
import Image from 'next/image'

function Videogames() {
    const videogames = [
        {img: fortnite},
        {img: lol},
        {img: valorant},
    ]
  return (
    <div className=' h-[128px] flex flex-row items-center justify-center md:justify-start gap-8 '>
        <div className=' bg-[#08101D]  flex flex-row gap-8 rounded-[7px] px-6'>

            {
                videogames.map((item, index)=>(
                    <div className='flex   items-center ' key={index}>
                        <Image src={item.img} alt='videogame' className='w-[80px] h-[80px] object-contain'/>
                        {
                            index<videogames.length-1 &&
                            <div className='w-[20px] flex justify-end '>

                            <div className='w-[1px] h-[20px]  bg-white'></div>
                            </div>
                        }
                    </div>
                ))
            }
            </div>
    </div>
  )
}

export default Videogames