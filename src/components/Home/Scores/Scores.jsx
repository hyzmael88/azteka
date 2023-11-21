import React from 'react'
import azteka from '../../../assets/images/home/Scores/azteka.png'
import cloud9 from '../../../assets/images/home/Scores/cloud9.png'
import vitality from '../../../assets/images/home/Scores/vitality.svg'
import faze from '../../../assets/images/home/Scores/faze.svg'
import Score from './Score'

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

  return (
    <div className='w-full px-[24px] h-full flex flex-row gap-8 mt-8 overflow-hidden '>
        {
            scores.map((score, index) => (
                <Score key={index} score={score}/>
            ))
        }
    </div>
  )
}

export default Scores