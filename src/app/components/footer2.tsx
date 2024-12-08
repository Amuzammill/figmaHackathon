import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import React from "react";

const Footer2 = () => {
  return (
    <div className="flex flex-wrap gap-10 p-5 sm:p-10 text-white bg-[#2A254b]">
      {/* Column 1: Address Details */}
      <div className="w-full sm:w-1/2 md:w-1/4">
        <p>
          <i>Avion</i> <br />
          21 New York Street <br />
          New York City <br />
          United States of America <br />
          432 34
        </p>
      </div>

      {/* Column 2: Social Media Links */}
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h1 className="mb-4 text-lg font-bold">Social Links</h1>
        <div className="flex space-x-6 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.skype.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaSkype size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaPinterestP size={24} />
          </a>
        </div>
      </div>

      {/* Column 3: Menu */}
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h1 className="mb-4 text-lg font-bold">Menu</h1>
        <div className="flex flex-col space-y-2">
          <button className="text-sm">New arrivals</button>
          <button className="text-sm">Best sellers</button>
          <button className="text-sm">Recently viewed</button>
          <button className="text-sm">Popular this week</button>
          <button className="text-sm">All products</button>
        </div>
      </div>

      {/* Column 4: Categories */}
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h1 className="mb-4 text-lg font-bold">Categories</h1>
        <div className="flex flex-col space-y-2">
          <button className="text-sm">Crockery</button>
          <button className="text-sm">Furniture</button>
          <button className="text-sm">Homeware</button>
          <button className="text-sm">Plant pots</button>
          <button className="text-sm">Chairs</button>
        </div>
      </div>

      {/* Column 5: Our Company */}
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h1 className="mb-4 text-lg font-bold">Our Company</h1>
        <div className="flex flex-col space-y-2">
          <button className="text-sm">About us</button>
          <button className="text-sm">Vacancies</button>
          <button className="text-sm">Contact us</button>
          <button className="text-sm">Privacy</button>
          <button className="text-sm">Return policy</button>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
