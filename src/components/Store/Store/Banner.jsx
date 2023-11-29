import Image from 'next/image'
import React from 'react'
import banner from '../../../assets/images/store/Store/banner.png'
import Button from '@/components/Home/Streaming/Creators&Events/Button'
import { useRouter } from 'next/router';

function Banner() {
    
    const router = useRouter();
  return (
    <div className='h-[150px] w-full mt-10 relative'>
        <Image src={banner} alt="banner" className='w-full h-full object-cover' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-end '>
            <h4 className='header text-[12px] w-[200px] '>
                descubre nuestros productos mas nuevos
            </h4>
            

            <button 
             onClick={()=>router.push('/Store')}
             className='py-[11px] px-[60px] bg-[#FFB202]
             font-lato font-bold text-[14px] md:text-[24px]
             mt-4 md:mt-0
             custom-shadow
             rounded-[7px] uppercase text-black'
            >
                Ver tienda
                </button>
        </div>
    </div>
  )
}

export default Banner