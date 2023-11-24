import React from 'react'
import Banner from './Banner'
import Products from './Products'
import Shadow1 from './Shadows/Shadow1'
import Shadow2 from './Shadows/Shadow2'

function LayoutStore() {
  return (
    <div className='w-full h-full px-[10px] md:px-[24px] mt-8 relative overflow-hidden'>
        <Banner/>
        <Products/>
        <div className='flex flex-row justify-center mt-8 mb-8'>
        <button className='bg-[#FFB202] w-[250px] py-[15px] px-[91px] font-lato
         font-bold uppercase text-[23px]
         rounded-[7px] custom-shadow
         '> Tienda </button>
        </div>
        <Shadow1/>
        <Shadow2/>
    </div>
  )
}

export default LayoutStore