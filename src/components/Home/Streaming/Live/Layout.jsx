import React from 'react'
import Info from './Info'
import Stream from './Stream'

function Layout() {
  return (
    <div className='w-full h-full flex flex-col px-[24px] text-white'>
      <div className='flex  justify-center items-center gap-2 mb-8'>

        <h3 className='header text-center'>Live</h3> <div className='bg-[#F00] rounded-full w-[26px] h-[26px]'></div>
      </div>
    <div className='w-full h-full flex flex-row justify-between items-center'>
        <Info/>
        <Stream/>

    </div>
    </div>
  )
}

export default Layout