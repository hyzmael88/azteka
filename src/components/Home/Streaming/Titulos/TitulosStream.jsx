import React from 'react'

function TitulosStream({titulo}) {
    return (
        <div className='w-full h-[100px] bg-gradient-to-r from-black
         via-gray-800 to-gray-900 bg-opacity-0
         relative
         '>
            
                {
                        titulo && 
                        <div className=''>

                        <h2 className='text-white '></h2>
                        </div>
                }
        </div>
    )
}

export default TitulosStream