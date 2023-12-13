import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import Subtotal from "./Subtotal";


function Orden() {
  const { cart } = useContext(AppContext);
  const [counter, setCounter] = useState(1);
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
                px-4 gap-4"
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
      <div className="hidden lg:flex ">
      <Subtotal />
      </div>
      
    </div>
  );
}

export default Orden;
