import React from "react";
import product1 from "../../../assets/images/home/Store/product1.png";
import product2 from "../../../assets/images/home/Store/product2.png";
import product3 from "../../../assets/images/home/Store/product3.png";
import product4 from "../../../assets/images/home/Store/product4.png";
import Image from "next/image";
import { useRouter } from "next/router";

import { useMediaQuery } from 'react-responsive';


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Products() {

  const products = [
    {
      id: 1,
      name: "Air Jordan 1 Azteka Esports",
      productSlug: "air-jordan-1-azteka-esports",
      price: 198,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
      img: product1,
      rate: 4.7,
      qtyrates: 128,
      category: "shoes",
    },
    {
      id: 2,
      name: "Azteka T-shirt Rakmul ADC",
      productSlug: "azteka-t-shirt-rakmul-adc",
      price: 97,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
      img: product2,
      rate: 4.5,
      qtyrates: 113,
      category: "t-shirts",
    },
    {
      id: 3,
      name: "Xbox Series X Controller Azteka",
      productSlug: "xbox-series-x-controller-azteka",
      price: 250,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
      img: product3,
      rate: 4.2,
      qtyrates: 14,
      category: "controllers",
    },
    {
      id: 4,
      name: "Nike Hoodie Azteka Pyramids",
      productSlug: "nike-hoodie-azteka-pyramids-4",
      price: 180,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
      img: product4,
      rate: 4.1,
      qtyrates: 48,
      category:  "hoodies",
    },
    ];

    const router= useRouter();

  const renderStars = (rate) => {
    const roundedRate = Math.ceil(rate);
    const stars = [];
    

    for (let i = 0; i < roundedRate; i++) {
      stars.push(
          <motion.span 
              ref={ref}
              key={i} 
              className="text-yellow-500 text-[30px]"
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
    <div>
      <div className="w-full h-full flex flex-row justify-start gap-8 mt-8 
      overflow-x-scroll scrollbar-hide"
      ref={ref}
      >
        {products.map((product, index) => (
         <motion.div
         
         key={index}
         className="w-full h-full flex flex-col items-center justify-center custom-shadow"
         initial={{ y: -50, opacity: 0 }}
         animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
         transition={{ duration: 1, delay: index * 0.2 }}
         onClick={() => router.push(`/Product/${product.productSlug}`)}
       >
         <Image
           src={product.img}
           alt=""
           className="w-[400px] h-[250px]  rounded-[7px]
           object-cover
           "
         />
         <motion.div className="w-full h-[120px] bg-black flex flex-col">
           <div className="flex flex-row gap-2 items-center">
             <div>
               {renderStars(product.rate)}
             </div>
             <p className="text-white font-lato font-bold text-[20px]">({product.qtyrates})</p>
           </div>
           <motion.div className="text-white w-full h-full flex flex-row justify-between items-end">
             <p className="w-[190px] text-[23px] font-lato font-bold">
               {product.name}
             </p>
             <div className="text-[23px] font-lato font-bold">
               ${product.price}
             </div>
           </motion.div>
         </motion.div>
       </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Products;
