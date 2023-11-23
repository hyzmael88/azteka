import Image from 'next/image'
import React from 'react'


function Score({score}) {
    console.log(score);
    console.log(score.team1logo);
    return (
        <div className='w-full h-full rounded-[7px] bg-[#08101D] '>
            <div className=' w-[331px] h-[204px]   flex flex-col items-center mt-4'>
                <h3 className='text-[16px] font-bold font-lato text-white uppercase'>{score.videogame}</h3>
                <h4 className='text-[10px] font-bold font-lato text-white uppercase'>{score.tournament}</h4>
                <div className='w-full h-full flex flex-row justify-around'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <Image src={score.team1logo} alt="" className='w-[90px] h-[90px] rounded-[7px]'/>
                        <h5 className=' font-bold header mt-4 text-center text-[14px] text-white uppercase'>{score.team1}</h5>
                    </div>

                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className='flex flex-row justify-center items-center'>
                            <h5 className='text-[18px] font-bold header text-white uppercase'>{score.score1}</h5>
                            <h5 className='text-[18px] font-bold header text-white uppercase ml-2'>-</h5>
                            <h5 className='text-[18px] font-bold header text-white uppercase ml-2'>{score.score2}</h5>
                        </div>
                        <h5 className='text-[18px] font-bold header text-white uppercase'>VS</h5>
                    </div>

                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <Image src={score.team2logo} alt="" className='w-[90px] h-[90px] rounded-[7px]'/>
                        <h5 className=' font-bold header mt-4 text-center text-[14px] text-white uppercase'>{score.team2}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score