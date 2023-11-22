import React from 'react';
import { FaReact, FaAngular, FaVuejs, FaEmber, FaNodeJs, FaAccusoft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Asus from '../../assets/images/home/Brands/asus.svg'
import Alien from '../../assets/images/home/Brands/Alien.svg'
import Mercedez from '../../assets/images/home/Brands/Mercedez.svg'
import Razer from '../../assets/images/home/Brands/Razer.svg'
import Vertagear from '../../assets/images/home/Brands/Vertagear.svg'
import Image from 'next/image';

const Brands = () => {
    const images = [
       {
        image: Asus
       },
       {
        image: Alien
       },
       {
        image: Mercedez
       },
       {
        image: Razer
       },
       {
        image: Vertagear
       },
    ];

    const variants = {
        animate: {
            x: [0,250],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                },
            },
        },
    };

    return (
        <div className="carousel-container mt-8 mb-8">
            <div className="carousel-wrapper flex  gap-8 ">
                {images.map((item, index) => (
                    <motion.div
                        key={index}
                        className="brand-image items-center"
                        variants={variants}
                        animate="animate"
                    >
                        <Image src={item.image} alt='asus-brand' className='w-[232px] h-[48px]'/>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Brands;