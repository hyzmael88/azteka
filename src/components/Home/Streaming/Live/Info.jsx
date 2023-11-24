import Image from 'next/image'
import React from 'react'
import { FaTwitch } from 'react-icons/fa'
import avatar from '../../../../assets/images/home/Streaming/avat.png'  

function Info() {
    const time = [
        {name:"Monday", time: "7:30 PM"},
        {name:"Tuesday", time: "7:30 PM"},
        {name:"Wednesday", time: "7:30 PM"},
        {name:"Thursday", time: "7:30 PM"},
        {name:"Friday", time: "7:30 PM"},
        {name:"Saturday", time: "7:30 PM"},
        {name:"Sunday", time: "7:30 PM"}
    ]

    
  return (
    <div className='w-full h-full flex flex-col text-left'>
        <div className='hidden md:flex items-center gap-1'>
        <Image src={avatar} alt='avatar-image' className='rounded-full w-[55px] h-[55px] bg-green-500'/>
        <div className='flex flex-col'>
        <div className='flex items-center'>
        <h3 className='header text-[48px]'>MORATOMICA</h3> <FaTwitch className='text-purple-500 text-[32px]'/>
        </div>
        <p className='font-lato text-[16px]'>11K SEGUIDORES
    </p>
        </div>
        </div>
        <p className='font-lato text-[14px]  md:text-[18px] 
        custom-shadow-text
        mt-4 mb-4 font-bold  '>¡Bienvenidos a mi rincón de diversión! 🐾🎮 Con 5 gatos como mis fieles asistentes (o jefes, depende del día), me aventuro en los reinos de League of Legends y Valorant, aunque a veces mezclo variedad.
             ¡Prepárate para risas, victorias y, por supuesto, momentos de inevitable manqueo! 😸🎉</p>
             <div className='hidden xl:flex flex-col '>
                {
                    time.map((time,index) =>(

                <div key={index} className='flex flex-row gap-8 uppercase'>
                    <h4 className='w-[80px] font-lato text-[16px] font-bold'>{time.name}</h4> <p className='font-lato text-[16px] font-bold'>{time.time}</p>
                </div>
                    ))
                }
             </div>
    </div>
  )
}

export default Info