import React from 'react';
import { FaReact, FaAngular, FaVuejs, FaEmber, FaNodeJs, FaAccusoft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Brands = () => {
    const icons = [
        <FaAngular key="angular" />,
        <FaEmber key="ember" />,
        <FaNodeJs key="nodejs" />,
        <FaReact key="react" />,
        <FaAccusoft key="accusoft" />
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
        <div className="carousel-container">
            <div className="carousel-wrapper flex text-[150px] gap-8 bg-red-500">
                {icons.map((Icon, index) => (
                    <motion.div
                        key={index}
                        className="brand-image"
                        variants={variants}
                        animate="animate"
                    >
                        {Icon}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Brands;