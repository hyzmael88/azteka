import React from 'react'
import { FaTwitch } from 'react-icons/fa'

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
        <div className='flex items-center'>
        <div className='rounded-full w-8 h-8 bg-green-500'/>
        <div className='flex flex-col'>
        <div className='flex items-center'>
        <h3>MORATOMICA</h3> <FaTwitch className='text-purple-500'/>
        </div>
        <p>11K SEGUIDORES
    </p>
        </div>
        </div>
        <p>¡Bienvenidos a mi rincón de diversión! 🐾🎮 Con 5 gatos como mis fieles asistentes (o jefes, depende del día), me aventuro en los reinos de League of Legends y Valorant, aunque a veces mezclo variedad.
             ¡Prepárate para risas, victorias y, por supuesto, momentos de inevitable manqueo! 😸🎉</p>
             <div className='flex flex-col '>
                {
                    time.map((time,index) =>(

                <div key={index} className='flex flex-row gap-8 uppercase'>
                    <h4 className='w-[80px]'>{time.name}</h4> <p>{time.time}</p>
                </div>
                    ))
                }
             </div>
    </div>
  )
}

export default Info