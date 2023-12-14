import Image from 'next/image'
import React from 'react'
import Banner from './Banner'
import Envio from './Envio'
import Datos from './Datos'
import Facturacion from './Facturacion'
import MetodoPago from './MetodoPago'
import Orden from './Orden'
import Subtotal from './Subtotal'
import Shadow1 from './Shadows/Shadow1'

function Layout() {
  return (
    <div className='w-full h-full relative'>
        {/* Banner */}
        <Banner/>
        <div className='h-full w-full px-[10px] lg:px-[24px] flex flex-col-reverse lg:flex-row justify-start items-start gap-8
        '>
            <div className='w-full h-full flex flex-col gap-8 '>
            <Envio/>
            <Datos/>
            <Facturacion/>
            <MetodoPago/>
            <div className='flex lg:hidden'>
            <Subtotal/>
            </div>
            </div>
            <div className='w-full h-full'>
            <Orden/>
            </div>
        </div>
        <Shadow1/>
    </div>
  )
}

export default Layout