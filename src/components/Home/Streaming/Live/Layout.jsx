import React from 'react'
import Info from './Info'
import Stream from './Stream'
import Shadow2 from './Shadows/Shadow2'
import Shadow1 from './Shadows/Shadow1'
import Shadow3 from './Shadows/Shadow3'

function Layout() {
  return (
    <div className='w-full h-full flex flex-col px-[10px] md:px-[24px] text-white relative'>
      <div className='flex  justify-center items-center gap-2 mb-8'>

        <h3 className='header text-center custom-shadow-text'>Live</h3> <div className='bg-[#F00] custom-shadow rounded-full w-[26px] h-[26px]'></div>
      </div>
    <div className='w-full h-full flex flex-col-reverse md:flex-row justify-between items-center '>
        <Info/>
        <Stream/>

    </div>
   <Shadow1/>
   <Shadow2/>
   <Shadow3/>
    </div>
  )
}

export default Layout