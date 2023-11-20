import React from 'react'
import Info from './Info'
import Stream from './Stream'

function Layout() {
  return (
    <div className='w-full h-full flex flex-col'>
        <h3 className='text-center'>Live</h3>
    <div className='w-full h-full flex flex-row justify-between items-center'>
        <Info/>
        <Stream/>

    </div>
    </div>
  )
}

export default Layout