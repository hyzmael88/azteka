import React, { useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import Products from './Products';




function Layout() {

    const [order, setOrder] = useState('relevance')

  return (
    <div className='w-full h-full '>
        <div className='w-full h-full flex flex-col items-center'>
            <button className='py-[16px] px-[10px] bg-[#21ECB5] uppercase flex items-center mt-20 mb-20 custom-shadow'>
            <BiSortAlt2 /> <p className='font-lato font-bold text-[13px]'>Order by: &nbsp; {order}</p>
            </button>
            <Products/>
        </div>
    </div>
  )
}

export default Layout