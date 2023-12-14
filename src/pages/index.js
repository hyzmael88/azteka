import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '../components/Home/Hero'
import Brands from '@/components/Home/Brands'
import Layout from '@/components/Home/Streaming/Live/Layout'
import LayoutCreatorsEvents from '@/components/Home/Streaming/Creators&Events/LayoutCreatorsEvents'
import Scores from '@/components/Home/Scores/Scores'
import LayoutStore from '@/components/Home/Store/LayoutStore'
import LayoutTeam from '@/components/Home/Team/LayoutTeam'
import Rewards from '@/components/Home/Rewards/Rewards'

import ico from '../assets/images/Logo/ico.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Azteka Esports</title>
        <meta name="description" content="El mejor equipo de Esports habla hispana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo/ico.png" />
      </Head>
      <main className='w-full h-full overflow-x-hidden max-w-[1444px] mx-auto'>
     
     <Hero/>
     <Brands/>
     <Layout/>
     <LayoutCreatorsEvents/> 
     <Scores/>
     <LayoutStore/>
     <LayoutTeam/>
     <Rewards/>
      </main>
    </>
  )
}
