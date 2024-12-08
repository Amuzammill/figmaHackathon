"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto bg-[#2A254B] py-10">
      <div className="flex flex-wrap justify-between px-5 sm:px-20 space-y-8 sm:space-y-0">
        {/* Menu Section */}
        <div className="flex-1 sm:flex-none">
          <h1 className="text-white text-lg font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <Link href="/product" className="text-white mt-4 text-sm">Popular this week</Link>
          <Link href="/productlist" className="text-white mt-4 text-sm block">All Products</Link>
        </div>

        {/* Category Section */}
        <div className="flex-1 sm:flex-none">
          <h1 className="text-white text-lg font-Clash Display">Category</h1>
          <p className="text-white mt-4 text-sm">Crockery</p>
          <p className="text-white mt-4 text-sm">Furniture</p>
          <p className="text-white mt-4 text-sm">Homeware</p>
          <p className="text-white mt-4 text-sm">Plants pot</p>
          <p className="text-white mt-4 text-sm">Chair</p>
        </div>

        {/* Company Section */}
        <div className="flex-1 sm:flex-none">
          <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
          <Link href="/about" className="text-white mt-4 text-sm">About Us</Link>
          <p className="text-white mt-4 text-sm">Vacancies</p>
          <p className="text-white mt-4 text-sm">Contact Us</p>
          <p className="text-white mt-4 text-sm">Privacy</p>
          <p className="text-white mt-4 text-sm">Return Policy</p>
        </div>

        {/* Mailing List Section */}
        <div className="flex-1 sm:flex-none">
          <h1 className="text-white text-lg font-Clash Display">Join our mailing list</h1>
          <div className="mt-5">
            <input
              type="email"
              placeholder="you@gmail.com"
              className="bg-gray-500 w-full sm:w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-white h-12 w-full sm:w-32 rounded-sm mt-2 sm:mt-3">Sign Up</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t-2 border-gray-700 m-auto w-full sm:w-11/12 mt-8 pt-4 flex flex-wrap justify-between items-center">
        {/* Copyright Text */}
        <p className="text-white text-sm text-center sm:text-left w-full sm:w-auto">
          Copyright 2022 Avion LTD
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
          <FaLinkedin className="text-white text-xl hover:text-blue-500" />
          <FaFacebookSquare className="text-white text-xl hover:text-blue-400" />
          <FaInstagram className="text-white text-xl hover:text-pink-500" />
          <FaSkype className="text-white text-xl hover:text-blue-300" />
          <FaTwitter className="text-white text-xl hover:text-blue-400" />
          <FaPinterest className="text-white text-xl hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
