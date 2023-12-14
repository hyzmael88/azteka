import React, { useEffect } from "react";
import Counter from "../Counter";
import Image from "next/image";

function Item({ item, counter, setCounter }) {
  useEffect(() => {
    setCounter(item.qty);
  }, [item]);

  return (
    <div className="w-full h-full flex flex-row gap-4 justify-between lg:items-center">
      <div className="w-[70%] h-full flex flex-col gap-4">
        <h3 className="text-white header text-[19px] custom-shadow-text ">{item.product.name}</h3>
        <p className="font-lato text-white text-[19px] custom-shadow-text ">SIZE: {item.size}</p>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="flex flex-row items-center gap-4">
            <span className="text-white font-lato text-[19px] custom-shadow-text ">QTY:</span>
            <Counter counter={counter} setCounter={setCounter} item={item} />
          </div>
          <span className="text-white font-lato font-bold text-[26px] custom-shadow-text  ">
            ${item.product.price}
          </span>
        </div>
      </div>
      <div className="w-[30%] h-full flex flex-col">
        <img
          src={item.product.img.src}
          alt={item.product.name}
          className="w-full lg:h-[140px] object-cover"
        />
      </div>
    </div>
  );
}

export default Item;
