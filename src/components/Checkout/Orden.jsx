import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";


function Orden() {
  const { cart } = useContext(AppContext);

  const [counter, setCounter] = useState(1);

  const [subtotal, setSubtotal] = useState(0);

  const [iva, setIva] = useState(0)

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
        console.log(item.qty)
        total += item.product.price * item.qty;
    });
    setSubtotal(total);
}, [cart]);

  useEffect(() => {
    setIva(subtotal * 0.16)
}, [subtotal]);
  

  const [envio, setEnvio] = useState(500);

  return (
    <div className="w-full h-full flex flex-col ">
      <div className="flex justify-between items-center h-full text-white mb-4">
        <h3 className="uppercase header">Orden</h3>
      </div>
      <div
        className="w-full h-full 
                flex flex-col
                justify-center
                items-center
                bg-[#08101D]
                rounded-[7px]
                px-4"
      >
        {cart.map((item, index) => (
          <Item
            item={item}
            key={index}
            counter={counter}
            setCounter={setCounter}
          />
        ))}
      </div>
      <div className="mt-8 w-full h-full flex flex-col">
        <div className="w-full flex flex-row justify-between items-center text-white">
          <h4 className="header text-[24px] ">Subtotal</h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[25px] custom-shadow-text">
            ${subtotal}
          </span>
        </div>
        <div className="w-full flex flex-row justify-between items-center text-white mt-8">
          <h4 className="font-lato font-bold  uppercase text-[18px]  ">
            + IVA(16%)
          </h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[17px] custom-shadow-text">
            ${iva}
          </span>
        </div>
        <div className="w-full flex flex-row justify-between items-center text-white mt-4 mb-8">
          <h4 className="font-lato font-bold text- uppercase text-[18px]  ">
            + Envio
          </h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[17px] custom-shadow-text">
            ${envio}
          </span>
        </div>
        <hr className="w-full h-[1.5px] bg-[#46484A] mb-5" />
        <div className="w-full flex flex-row justify-between items-center text-white">
          <h4
            className="header text-[24px] uppercase
           "
          >
            Total
          </h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[25px] custom-shadow-text">
            ${subtotal}
          </span>
        </div>
      </div>
      <button className="w-full h-[50px] bg-[#FFB202] rounded-[7px] mt-8 mb-8  font-lato font-bold text-[25px] custom-shadow">
        PAGAR
      </button>
    </div>
  );
}

export default Orden;
