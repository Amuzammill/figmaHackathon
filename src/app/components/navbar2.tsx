"use client";
import Image from "next/image"
import React, { useState } from "react";
import { FiSearch, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Sale Banner */}
      <div className="bg-[#2A254B] flex items-center justify-center py-4 px-4 relative">
  {/* Delivery Image and Text */}
  <div className="flex items-center gap-2">
    <Image src="/images/Delivery.png" alt="Delivery Icon" width={16} height={16} />
    <p className="text-[#fafafa] text-sm md:text-base text-center">
      Free delivery on all orders over £50 with code easter checkout
    </p>
  </div>

  {/* Close Icon */}
  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center text-[#fafafa]">
    <MdClose />
  </div>
</div>


      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6 relative border-b-2 border-gray-300">
        {/* Logo */}
        <div>
          <h2 className="text-[#22202E] text-[24px] font-normal leading-7">
            Avion
          </h2>
        </div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center space-x-6 text-[#000000] font-medium">
          <li className="cursor-pointer text-[#726E8D]">Plant pots</li>
          <li className="cursor-pointer text-[#726E8D]">Ceramics</li>
          <li className="cursor-pointer text-[#726E8D]">Tables</li>
          <li className="cursor-pointer text-[#726E8D]">Chairs</li>
          <li className="cursor-pointer text-[#726E8D]">Crockery</li>
          <li className="cursor-pointer text-[#726E8D]">Tableware</li>
          <li className="cursor-pointer text-[#726E8D]">Cutlery</li>
        </ul>

        {/* Icons and Search Bar */}
        <div className="flex items-center space-x-4">
          {/* Search for desktop */}
          <div className="cursor-pointer">
            <FiSearch className="h-[16px] w-[16px] bg-[#ffffff]" />
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="cursor-pointer">
            <FiHeart className="h-[16px] w-[16px] bg-[#ffffff]" />
          </div>
          <div className="cursor-pointer">
            <FaRegUserCircle  className="h-[16px] w-[16px] bg-[#ffffff]" />
          </div>

          {/* Search Icon for mobile */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FiSearch className="text-black text-2xl" />
          </div>

          {/* Hamburger Menu */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu className="text-black text-2xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Right-Side Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-56 bg-gray-100 z-10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon Inside Menu */}
        <div className="flex justify-end p-4">
          <FiX
            className="text-black text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-center space-y-4 p-6">
          <li className="cursor-pointer text-black hover:text-gray-700">
            Home
          </li>
          <li className="cursor-pointer text-black hover:text-gray-700">
            Contact
          </li>
          <li className="cursor-pointer text-black hover:text-gray-700">
            About
          </li>
          <li className="cursor-pointer text-black hover:text-gray-700">
            Signup
          </li>
        </ul>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mx-4 mt-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-sm text-gray-700 w-full"
          />
          <FiSearch className="text-black text-xl" />
        </div>
      )}
    </div>
  );
};

export default Header;
