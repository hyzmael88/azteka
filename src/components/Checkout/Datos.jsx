import React, { useState } from "react";


function Datos() {

    const [open, setOpen] = useState(false)

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex justify-between items-center h-full text-white mb-4">
        <h3 className="uppercase header">Datos personales</h3>
        <div className="">
          <span className="text-[30px] header
          cursor-pointer
          "
           onClick={()=>{setOpen(!open)}}
          >
            {
                open?
                "+"
                :
                "-"
            }</span>
        </div>
      </div>
      <div
        className={`w-full h-full grid grid-cols-2 justify-center
      items-center
      bg-[#08101D]
      rounded-[7px]
      px-4
      ${open ? 'hidden' : ''}`}>

        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]
        col-span-2
        ">
          <input
            type="text"
            placeholder="NOMBRE"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]
        col-span-2
        ">
          <input
            type="text"
            placeholder="CORREO"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]
        col-span-2
        ">
          <input
            type="text"
            placeholder="TELEFONO"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
   
      </div>
    </div>
  );
}

export default Datos;
