import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='w-full h-full max-w-[1444px] mx-auto'>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  )
}
