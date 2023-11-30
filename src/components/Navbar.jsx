import Image from "next/image";
import React, { useState } from "react";
import { FaCross, FaHamburger, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../assets/images/Logo/logo.png";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';



const Navbar = () => {
  const NavItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/About",
    },
    {
      title: "Store",
      url: "/Store",
    },
    {
      title: "Contact",
      url: "Contact",
    },
  ];

  const [visible, setVisible] = useState(false)
  return (
    <>
      <motion.nav className="w-full h-[145px] flex xl:hidden justify-between  items-center "
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="ml-8">
    <Image
      src={Logo}
      alt="Logo"
      className="h-[111px] w-[111px] mx-auto"
    />
  </div>
  <div className="flex gap-4 mr-8">
    <FaShoppingCart className="text-white text-[35px]" />
    {
      visible ?
      <IoClose 
      onClick={()=>setVisible(false)}
        className="text-white text-[35px] cursor-pointer" />
        :
        <GiHamburgerMenu 
        onClick={()=>setVisible(!visible)}
          className="text-white text-[35px] cursor-pointer" 
          />
      }
  </div>
</motion.nav>

{
  visible && (
    <motion.div className="w-full h-[250px] flex justify-between  items-center bg-[#02090B] py-4 px-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full flex flex-col items-center gap-8">
        {NavItems.map((item, index) => (
          <a
            href={item.url}
            key={index}
            className="text-white header text-[18px]"
          >
            {item.title}
          </a>
        ))}
      </div>
    </motion.div>
  )
}

<motion.nav className="hidden xl:flex w-full items-center justify-between bg-[#02090B] py-4 px-6"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
>
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
</motion.nav>
    </>
  );
};

export default Navbar;
