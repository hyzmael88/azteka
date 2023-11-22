import Image from "next/image";
import React, { useState } from "react";
import { FaCross, FaHamburger, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../assets/images/Logo/logo.png";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const NavItems = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Shop",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ];

  const [visible, setVisible] = useState(false)
  return (
    <>
      <nav className="w-full h-[145px] flex justify-between  items-center ">
        <div className="ml-8">
          <Image
            src={Logo}
            alt="Logo"
            className="h-[111px] w-[111px] mx-auto"
          />
        </div>
        <div className="flex gap-4 mr-8">
          <FaShoppingCart className="text-white text-[50px]" />
          {
            visible ?
            <IoClose 
            onClick={()=>setVisible(false)}
              className="text-white text-[50px] cursor-pointer" />
              :
              <GiHamburgerMenu 
              
              onClick={()=>setVisible(!visible)}
                className="text-white text-[50px] cursor-pointer" 
                />
            }
        </div>
      </nav>

      {
        visible && (
          <div className="w-full h-[250px] flex justify-between  items-center bg-[#02090B] py-4 px-6">
            <div className="w-full flex flex-col items-center gap-8">
              {NavItems.map((item, index) => (
                <span
                  href="#"
                  key={index}
                  className="text-white header text-[18px]"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        )
      }

      <nav className="hidden md:flex w-full items-center justify-between bg-[#02090B] py-4 px-6">
        <div className="w-full flex items-center gap-4">
          {NavItems.map((item, index) => (
            <span
              href="#"
              key={index}
              className="text-white header text-[18px]"
            >
              {item.title}
            </span>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          {" "}
          {/* Modificado: Agregado justify-center */}
          <Image
            src={Logo}
            alt="Logo"
            className="h-[111px] w-[111px] mx-auto"
          />
        </div>
        <div className="w-full flex justify-end items-center space-x-4">
          <a href="#" className="text-white text-[32px]">
            <FaShoppingCart />
          </a>
          <a href="#" className="text-white text-[32px]">
            <FaUser />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
