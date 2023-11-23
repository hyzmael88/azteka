import React from 'react'
import Banner from './Banner'
import Products from './Products'

function LayoutStore() {
  return (
    <div className='w-full h-full px-[10px] md:px-[24px] mt-8'>
        <Banner/>
        <Products/>
        <div className='flex flex-row justify-center mt-8 mb-8'>
        <button className='bg-[#FFB202] w-[250px] py-[15px] px-[91px] font-lato
         font-bold uppercase text-[23px]
         rounded-[7px]
         '> Tienda </button>
        </div>
    </div>
  )
}

export default LayoutStore