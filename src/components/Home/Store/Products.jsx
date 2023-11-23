import React from "react";
import product1 from "../../../assets/images/home/Store/product1.png";
import product2 from "../../../assets/images/home/Store/product2.png";
import product3 from "../../../assets/images/home/Store/product3.png";
import product4 from "../../../assets/images/home/Store/product4.png";
import Image from "next/image";

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
  ];

  const renderStars = (rate) => {
    const roundedRate = Math.ceil(rate);
    const stars = [];

    for (let i = 0; i < roundedRate; i++) {
        stars.push(<span key={i} className="text-yellow-500 text-[30px]">&#9733;</span>);
    }

    return stars;
};

  return (
    <div>
      <div className="w-full h-full flex flex-row justify-start gap-8 mt-8 overflow-x-scroll scrollbar-hide">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            <Image
              src={product.img}
              alt=""
              className="w-full h-full rounded-[7px] "
            />
            <div className="w-full h-[120px] bg-black flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <div>
                {renderStars(product.rate)}
                </div>
              <p className="text-white font-lato font-bold text-[20px]">({product.qtyrates})</p>
                </div>
              <div className="text-white w-full h-full flex flex-row justify-between items-end">
                <p className="w-[190px] text-[23px] font-lato font-bold">
                  {product.name}
                </p>
                  <div className="text-[23px] font-lato font-bold">
                    ${product.price}
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
