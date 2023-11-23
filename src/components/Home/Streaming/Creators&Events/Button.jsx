import React from 'react'

function Button({titulo}) {
  return (
    <div>
        <button className='py-[11px] px-[82px] bg-[#FFB202]
        font-lato font-bold text-[14px] md:text-[24px]
        mt-4 md:mt-0
        custonm-shadow
        rounded-[7px] uppercase text-black'>{titulo}</button>
    </div>
  )
}

export default Button