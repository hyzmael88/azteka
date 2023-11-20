
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center" style={{ backgroundImage: 'url(path/to/background-image.jpg)' }}>
     <img src="logo.png" alt="Logo" width={32} height={32} className="h-8 w-8 mx-auto" />
      <p className="text-black text-center mb-4">Únete a la comunidad del mejor equipo mexicano de esports</p>
      <button className="bg-[#FFB202] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
        ÚNETE
      </button>
    </div>
  );
}

export default Hero;
