
import Image from 'next/image';
import React from 'react';
import bg from '../../assets/images/home/Hero/bg.png';
import azteka from '../../assets/images/home/Hero/azteka.png';


const Hero = () => {
  return (
    <div className="bg-cover bg-center h-[85vh] flex flex-col justify-center items-center relative" style={{ backgroundImage: 'url(path/to/background-image.jpg)' }}>
     <Image src={bg} alt="Logo"  className="w-full h-full object-cover absolute " />
     <div className='w-full h-full flex flex-col justify-center items-center z-10'>
      <Image src={azteka} alt="Logo" className='w-[636px] h-[433px]' />

      <p className="text-white text-center mb-4 header text-[32px] w-[638px] ">unete a la comunidad del mejor equipo 
      <br/>
      <span className='text-[#76FFD4] text-[43px]'>
      mexicano de esports
        </span> </p>
      <button className="bg-[#FFB202] w-[250px] p-[15px] font-lato font-bold
       text-blackpy-2 px-4 rounded text-[23px]">
        ÚNETE
      </button>
     </div>
    </div>
  );
}

export default Hero;
