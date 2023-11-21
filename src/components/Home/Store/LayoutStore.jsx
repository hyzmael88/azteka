import React from 'react'
import Banner from './Banner'
import Products from './Products'

function LayoutStore() {
  return (
    <div className='w-full h-full px-[24px] '>
        <Banner/>
        <Products/>
    </div>
  )
}

export default LayoutStore