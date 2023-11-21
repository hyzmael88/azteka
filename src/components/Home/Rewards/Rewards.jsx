import Image from "next/image";
import React from "react";
import rewards from "../../../assets/images/home/Rewards/Rewards.png";
import { MdSend } from "react-icons/md";

function Rewards() {
  return (
    <div className="w-full h-full flex flex-col relative">
      <Image
        src={rewards}
        alt="rewards"
        className="w-[100%] h-[100%] object-contain"
      />
      <div className="w-full h-full flex flex-col justify-center items-center absolute left-0 z-10">
        <h3 className="header text-center text-white">Suscribete y obten</h3>
        <h3 className="header w-[772px] text-[56px] text-center text-[#76FFD4]">
          Grandes recompensas
        </h3>
        <div className="flex flex-row mt-10">
          <input
            type="text"
            placeholder="Ingresa tu correo"
            className="input w-[400px] h-[81px] bg-transparent border-4
                text-white header text-[20px] border-white rounded-l-[7px] text-center"
          />
          <button
            className="button w-[118px] h-[81px] rounded-r-[7px] text-black bg-yellow-500 text-center
                flex justify-center items-center
                "
          >
            <MdSend className="text-[50px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
