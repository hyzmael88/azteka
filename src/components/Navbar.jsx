
import Image from 'next/image';
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../assets/images/Logo/logo.png';

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
    ]
    return (
        <nav className="w-full flex items-center justify-between bg-[#02090B] py-4 px-6">
            <div className="w-full flex items-center gap-4">
              {
                NavItems.map((item, index) => (
                    <span href="#" key={index} className="text-white header text-[18px]">{item.title}</span>
                ))
              }
            </div>
            <div className="w-full flex justify-center items-center"> {/* Modificado: Agregado justify-center */}
                <Image src={Logo} alt="Logo"  className="h-[111px] w-[111px] mx-auto" />
            </div>
            <div className="w-full flex justify-end items-center space-x-4">
                <a href="#" className="text-white text-[32px]"><FaShoppingCart /></a>
                <a href="#" className="text-white text-[32px]"><FaUser /></a>
            </div>
        </nav>
    );
}

export default Navbar;
