import React from 'react'
import player1 from '../../../assets/images/home/Players/player1.png'
import player2 from '../../../assets/images/home/Players/player2.png'
import player3 from '../../../assets/images/home/Players/player3.png'
import player4 from '../../../assets/images/home/Players/player4.png'
import player5 from '../../../assets/images/home/Players/player5.png'
import Image from 'next/image'
import { FaTiktok, FaTwitch, FaTwitter } from 'react-icons/fa'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Players() {

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

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
        <div className='flex flex-row xl:justify-center gap-8 md:ml-8 overflow-x-scroll  scrollbar-hide'>
            
     {
         players.map((item, index)=>(
            <motion.div 
            ref={ref}
            className='w-full h-full flex flex-col justify-center items-center'
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
        >
            <motion.div 
                            className='w-[246px] h-[246px]'
                            initial={{ y: -50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <Image src={item.img} alt='player' className=' w-full h-full rounded-[7px] custom-shadow object-cover '/>
                        </motion.div>
                        <motion.h2 
                            className='text-white font-lato font-bold text-[16px] uppercase mt-4'
                            initial={{ y: -50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            {item.name}
                        </motion.h2>
                        <motion.p 
                            className='text-white font-lato font-light  text-[13px]  uppercase  custom-shadow-text'
                            initial={{ y: -50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            {item.ubication}
                        </motion.p>
                        <motion.div 
                            className='flex flex-row gap-2 mt-2'
                            initial={{ y: -50, opacity: 0 }}
                            animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                        <a href={item.twitch}><FaTwitch className='text-white custom-shadow-text'/></a>
                        <a href={item.twitter}><FaTwitter className='text-white custom-shadow-text'/></a>
                        <a href={item.tiktok}><FaTiktok className='text-white custom-shadow-text'/></a>
                    </motion.div>
                </motion.div>
            ))
     }
            </div>

    </div>
  )
}

export default Players