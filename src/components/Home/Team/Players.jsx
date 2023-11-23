import React from 'react'
import player1 from '../../../assets/images/home/Players/player1.png'
import player2 from '../../../assets/images/home/Players/player2.png'
import player3 from '../../../assets/images/home/Players/player3.png'
import player4 from '../../../assets/images/home/Players/player4.png'
import player5 from '../../../assets/images/home/Players/player5.png'
import Image from 'next/image'
import { FaTiktok, FaTwitch, FaTwitter } from 'react-icons/fa'

function Players() {
    const players = [
    {img: player1,
    name: "Cecilia acosta",
    ubication: "Acapulco, GRO",
    twitch: "https://www.twitch.tv/ceciliaacosta",
    twitter: "https://twitter.com/ceciliaacosta",
    tiktok: "https://www.tiktok.com/@ceciliaacosta"
},{
    img: player2,
    name: "Juan Perez",
    ubication: "Ciudad de México, CDMX",
    twitch: "https://www.twitch.tv/juanperez",
    twitter: "https://twitter.com/juanperez",
    tiktok: "https://www.tiktok.com/@juanperez"
},
{
    img: player3,
    name: "Maria Lopez",
    ubication: "Guadalajara, JAL",
    twitch: "https://www.twitch.tv/marialopez",
    twitter: "https://twitter.com/marialopez",
    tiktok: "https://www.tiktok.com/@marialopez"
},
{
    img: player4,
    name: "Carlos Sanchez",
    ubication: "Monterrey, NL",
    twitch: "https://www.twitch.tv/carlossanchez",
    twitter: "https://twitter.com/carlossanchez",
    tiktok: "https://www.tiktok.com/@carlossanchez"
},
{
    img: player5,
    name: "Ana Torres",
    ubication: "Puebla, PUE",
    twitch: "https://www.twitch.tv/anatorres",
    twitter: "https://twitter.com/anatorres",
    tiktok: "https://www.tiktok.com/@anatorres"
},
    ]
  return (
    <div className='w-full mt-8'>
        <div className='flex flex-row md:justify-center gap-8 md:ml-8 overflow-x-scroll  scrollbar-hide'>
            
     {
         players.map((item, index)=>(
             <div className='w-full h-full flex flex-col justify-center items-center' key={index}>
                <div className='w-[246px] h-[246px]  '>
                    <Image src={item.img} alt='player' className=' w-full h-full rounded-[7px] custom-shadow object-cover '/>
                    </div>
                    <h2 className='text-white font-lato font-bold text-[16px] uppercase mt-4'>{item.name}</h2>
                    <p className='text-white font-lato font-light  text-[13px]  uppercase  custom-shadow-text'>{item.ubication}</p>
                    <div className='flex flex-row gap-2 mt-2'>
                        <a href={item.twitch}><FaTwitch className='text-white custom-shadow-text'/></a>
                        <a href={item.twitter}><FaTwitter className='text-white custom-shadow-text'/></a>
                        <a href={item.tiktok}><FaTiktok className='text-white custom-shadow-text'/></a>
                    </div>
                </div>
            ))
     }
            </div>

    </div>
  )
}

export default Players