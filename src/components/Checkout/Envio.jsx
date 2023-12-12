import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from 'react-select';
import countries from 'i18n-iso-countries';
import emojiFlags from 'emoji-flags';

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const countryOptions = Object.entries(countries.getNames('en')).map(([code, name]) => {
    const flagData = emojiFlags.countryCode(code);
    const flag = flagData ? flagData.emoji : '';
    return { value: code, label: `${flag} ${name}` };
  });

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#08101D',
    borderColor: 'white',
    height: 50,
    paddingLeft: '1rem',
    color: 'white',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'white',
  }),
};

function Envio() {
    const [open, setOpen] = useState(false)
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex justify-between items-center h-full text-white mb-4">
        <h3 className="uppercase header">Envio</h3>
        <div className="">
          <span className="text-[30px] header cursor-pointer"
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
      ${open ? 'hidden' : ''}`}
>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]
        col-span-2
        ">
          <input
            type="text"
            placeholder="CALLE Y NUMERO EXTERIOR"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]
        col-span-2
        ">
          <input
            type="text"
            placeholder="NUMERO INTERIOR O REFERENCIA"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]">
          <input
            type="text"
            placeholder="CIUDAD"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]">
          <input
            type="text"
            placeholder="ESTADO"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] rounded-[7px]">
          <input
            type="text"
            placeholder="CP"
            className="w-full h-full pl-3 pr-10 bg-transparent outline-none text-white placeholder-white"
          />
        </div>
        <div className="relative w-full h-[50px] bg-[#08101D] border-[1px] border-white rounded-[7px]">
        <Select 
          options={countryOptions} 
          styles={customStyles}
          placeholder="SELECCIONA TU PAIS"
        />
      </div>
      </div>
    </div>
  );
}

export default Envio;