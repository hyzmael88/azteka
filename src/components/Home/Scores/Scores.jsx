import React from 'react'
import azteka from '../../../assets/images/home/Scores/azteka.png'
import cloud9 from '../../../assets/images/home/Scores/cloud9.png'
import vitality from '../../../assets/images/home/Scores/vitality.svg'
import faze from '../../../assets/images/home/Scores/faze2.svg'
import Score from './Score'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Scores() {
 const scores = [
    {
        videogame: 'League of Legends',
        tournament: 'World Championship',
        date: '2021-10-05',
        time: '12:00',
        team1: 'Azteka',
        team2: 'Cloud9',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: cloud9,
    },
    {
        videogame: 'Valorant',
        tournament: 'Champions 2023',
        date: '2021-10-08',
        time: '13:00',
        team1: 'Azteka',
        team2: 'Evil Geniuses',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: vitality,
    },
    {
        videogame: 'Valorant',
        tournament: 'Champions 2023',
        date: '2021-10-08',
        time: '13:00',
        team2: 'Azteka',
        team1: 'Team Vitality',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: vitality,
    },
    {
        videogame: 'Valorant',
        tournament: 'Champions 2023',
        date: '2021-10-08',
        time: '13:00',
        team1: 'Azteka',
        team2: 'Faze Clan',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: faze,
    },
 ]

 const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <motion.div className='w-full px-[10px] md:px-[24px] h-full 
    flex flex-row gap-4 md:gap-8 mt-8 overflow-x-scroll scrollbar-hide '
    ref={ref}
    variants={variants}
    initial="hidden"
    animate={inView ? 'show' : 'hidden'}>
        {
            scores.map((score, index) => (
                <motion.div key={index} variants={item}>
                  <Score score={score}/>
                </motion.div>
            ))
        }
    </motion.div>
  )
}

export default Scores