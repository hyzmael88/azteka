
import Image from 'next/image';
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-[#02090B] py-4 px-6">
            <div className="flex items-center space-x-4">
                <a href="#" className="text-white">Element 1</a>
                <a href="#" className="text-white">Element 2</a>
                <a href="#" className="text-white">Element 3</a>
                <a href="#" className="text-white">Element 4</a>
            </div>
            <div className="flex items-center">
                <img src="logo.png" alt="Logo" width={32} height={32} className="h-8 w-8 mx-auto" />
            </div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-white"><FaShoppingCart /></a>
                <a href="#" className="text-white"><FaUser /></a>
            </div>
        </nav>
    );
}

export default Navbar;
