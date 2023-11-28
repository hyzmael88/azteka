import React from 'react'
import product1 from '../../../assets/images/store/Store/product1.png'
import product2 from '../../../assets/images/store/Store/product2.png'
import product3 from '../../../assets/images/store/Store/product3.png'
import product4 from '../../../assets/images/store/Store/product4.png'
import product5 from '../../../assets/images/store/Store/product5.png'
import product6 from '../../../assets/images/store/Store/product6.png'
import product7 from '../../../assets/images/store/Store/product7.png'
import product9 from '../../../assets/images/store/Store/product9.png'
import product10 from '../../../assets/images/store/Store/product10.png'
import Image from 'next/image'

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Products() {

    const products = [
        {
          id: 1,
          name: "Air Jordan 1 Azteka Esports",
          price: 198,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product1,
          rate: 4.7,
          qtyrates: 128
        },
        {
          id: 2,
          name: "Azteka T-shirt Rakmul ADC",
          price: 97,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product2,
          rate: 4.5,
          qtyrates: 113
        },
        {
          id: 3,
          name: "Xbox Series X Controller Azteka",
          price: 250,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product3,
          rate: 4.2,
          qtyrates: 14
        },
        {
          id: 4,
          name: "Nike Hoodie Azteka Pyramids",
          price: 180,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product4,
          rate: 4.1,
          qtyrates: 48
        },
        {
          id: 5,
          name: "Nike Hoodie Azteka Pyramids",
          price: 180,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product5,
          rate: 4.1,
          qtyrates: 48
        },
        {
          id: 6,
          name: "Nike Hoodie Azteka Pyramids",
          price: 180,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product6,
          rate: 4.1,
          qtyrates: 48
        },
        {
          id: 7,
          name: "Nike Hoodie Azteka Pyramids",
          price: 180,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product7,
          rate: 4.1,
          qtyrates: 48
        },
        {
          id: 8,
          name: "Nike Hoodie Azteka Pyramids",
          price: 180,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product9,
          rate: 4.1,
          qtyrates: 48
        },
        {
          id: 8,
          name: "Nike Hoodie Azteka Pyramids",
          price: 180,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
          img: product10,
          rate: 4.1,
          qtyrates: 48
        },
      ];

      const renderStars = (rate) => {
        const roundedRate = Math.ceil(rate);
        const stars = [];
        
    
        for (let i = 0; i < roundedRate; i++) {
          stars.push(
              <motion.span 
                  ref={ref}
                  key={i} 
                  className="text-yellow-500 text-[20px]"
                  initial={{ y: -50, opacity: 0 }}
                  animate={isMobile || inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
              >
                  &#9733;
              </motion.span>
          );
      }
    
        return stars;
    };
    
    const { ref, inView } = useInView({
      triggerOnce: true,
    });
    
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className='w-full h-full flex flex-col bg-[#191A1B] mb-20 custom-shadow'>
        <div className='w-full px-[10px] h-full grid grid-cols-2 gap-4 mt-4 mb-4'>
        {products.map((product, index) => (
         <motion.div
         ref={ref}
         key={index}
         className="w-full h-full flex flex-col items-center justify-center custom-shadow"
         initial={{ y: -50, opacity: 0 }}
         animate={isMobile || inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
         transition={{ duration: 1, delay: index * 0.2 }}
       >
         <Image
           src={product.img}
           alt=""
           className="w-full h-full rounded-[7px] object-cover "
         />
         <motion.div className="w-full h-[120px] bg-black flex flex-col">
           <div className="flex flex-row  gap-2 items-center">
             <div>
               {renderStars(product.rate)}
             </div>
             <p className="text-white font-lato font-bold text-[12px] xl:text-[20px]">({product.qtyrates})</p>
           </div>
           <motion.div className="text-white w-full h-full flex flex-row justify-between items-end">
             <p className="w-[108px] xl:w-[190px] text-[12px] xl:text-[23px] font-lato font-bold">
               {product.name}
             </p>
             <div className=" text-[12px] xl:text-[23px] font-lato font-bold">
               ${product.price}
             </div>
           </motion.div>
         </motion.div>
       </motion.div>
        ))}
        </div>
            <div className='flex flex-row justify-center items-center'>
                    <div>
                        <button className='py-[16px] px-[10px] bg-[#054A59] hover:bg-[#21ECB5]
                        text-white hover:text-black
                        uppercase flex items-center
                        rounded-[7px]
                        mt-10 mb-10
                        custom-shadow
                        '>
                        <p className='font-lato font-bold text-[13px]'>Load More</p>
                        </button>
                    </div>
            </div>
    </div>
  )
}

export default Products