import React, { useState } from "react";
import { useRouter } from "next/router";
import { products } from "../../components/Store/Store/Products";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoShare } from "react-icons/io5";

function Product() {
  const router = useRouter();
  const { productSlug } = router.query;

  const [size, setSize] = useState("xs");
  const [counter, setCounter] = useState(0);

  // Buscar el producto por el productSlug en el arreglo Products
  const product = products.find(
    (product) => product.productSlug === productSlug
  );

  return (
    <div>
      {product ? (
        <div className="w-full h-full flex flex-col items-center px-[20px] ">
          <Image
            src={product.img}
            alt={product.name}
            className="w-full h-[516px] object-cover"
          />
          <div className="w-full h-full flex items-center">
            {/* aqui van las fotos extra */}
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <h2 className="text-white header text-[32px] w-[448px] text-center">
              {product.name}
            </h2>
            <p className="font-lato text-[31px] font-bold text-[#9B9B9B] text-center">
              ${product.price}
            </p>
            <p className="font-lato text-[20px] text-white">{size}</p>
            {/* sizes */}
            <div className="w-full flex items-center justify-center gap-4">
              <div
                className="w-[50px] h-[50px] bg-[#054A59] hover:bg-[#21ECB5]
                                     flex flex-col
                                     justify-center items-center text-center hover:text-white
                                     cursor-pointer "
              >
                XS
              </div>
              <div
                className="w-[50px] h-[50px] bg-[#054A59] hover:bg-[#21ECB5]
                                     flex flex-col
                                     justify-center items-center text-center hover:text-white
                                     cursor-pointer "
              >
                S
              </div>
              <div
                className="w-[50px] h-[50px] bg-[#054A59] hover:bg-[#21ECB5]
                                     flex flex-col
                                     justify-center items-center text-center hover:text-white
                                     cursor-pointer "
              >
                M
              </div>
              <div
                className="w-[50px] h-[50px] bg-[#054A59] hover:bg-[#21ECB5]
                                     flex flex-col
                                     justify-center items-center text-center hover:text-white
                                     cursor-pointer "
              >
                L
              </div>
              <div
                className="w-[50px] h-[50px] bg-[#054A59] hover:bg-[#21ECB5]
                                     flex flex-col
                                     justify-center items-center text-center hover:text-white
                                     cursor-pointer "
              >
                XL
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-[172px] h-[36px] text-center flex justify-between
                                     items-center relative
                                     mt-5 mb-5
                                     "
              >
                <div
                  className="bg-[#054A59] w-[36px] h-[36px] flex items-center justify-center
                                        text-white text-[30px] pb-2 hover:bg-[#21ECB5]
                                        "
                >
                  -
                </div>
                <div
                  className="bg-[#D9D9D9] w-[100px] h-[36px] flex justify-center items-center font-lato font-bold
                                            "
                >
                  {counter}
                </div>
                <div
                  className="bg-[#054A59] w-[36px] h-[36px] flex items-center justify-center
                                        text-white text-[30px] pb-2
                                        hover:bg-[#21ECB5]
                                        "
                >
                  +
                </div>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div
            className="w-full h-full flex flex-col items-center  gap-4
                        mb-5 
                        "
          >
            <button className="bg-gradient-to-t  from-[#054A59] to-[#21ECB5] h-[54px] w-full ">
              <p
                className="text-white font-lato font-bold text-[20px] uppercase 
                            flex justify-center items-center gap-2"
              >
                add to cart <FaShoppingCart className="text-white" />
              </p>
            </button>
            <button className="bg-gradient-to-t  from-[#E7902A] to-[#FFB202] h-[54px] w-full ">
              <p
                className="text-white font-lato font-bold text-[20px] uppercase 
                            flex justify-center items-center gap-2"
              >
                buy now <FaShoppingCart className="text-white" />
              </p>
            </button>
            <button
              className="bg-[#D9D9D9] h-[54px] w-[208px] 
                        rounded-[7px]
                        "
            >
              <p
                className="text-black font-lato font-bold text-[20px] uppercase 
                            flex justify-center items-center gap-2"
              >
                share <IoShare className="text-black" />
              </p>
            </button>
          </div>
          <hr className="w-full h-[1.5px] bg-[#46484A] mb-5" />
          {/* Info */}
          <div className="w-full h-full flex flex-col items-center gap-4">
            <div className="flex flex-row items-center relative">
              <span className="text-white font-lato font-bold text-[20px] uppercase">
                description
              </span>
            </div>
            <p className="text-white font-lato text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con
            </p>
            <p className="text-white font-lato font-bold text-[20px] uppercase">
              Details
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p className="text-white header">Producto no encontrado</p>
        </div>
      )}
    </div>
  );
}

export default Product;
