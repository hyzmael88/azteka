import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import Envio from './Envio'
import Datos from './Datos'
import Facturacion from './Facturacion'
import MetodoPago from './MetodoPago'

function Layout() {
  return (
    <div>
        {/* Banner */}
        <Banner/>
        <div className='h-full w-full px-[10px] lg:px-[24px] flex flex-col lg:flex-row justify-start items-start
        '>
            <div className='w-full h-full flex flex-col gap-8 '>
            <Envio/>
            <Datos/>
            <Facturacion/>
            <MetodoPago/>
            </div>
            <div className='w-full h-full'>

            </div>
        </div>
    </div>
  )
}

export default Layout