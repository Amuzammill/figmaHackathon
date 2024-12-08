import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";

const Cart = () => {
  return (
    <div>
      <Navbar />

      {/* Main Cart Container */}
      <div className="w-full h-[749px] bg-[#f9f9f9] py-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Cart Header */}
          <h1 className="text-3xl font-bold font-[Clash Display] text-[#2A254B] mb-8">
            Your Shopping Cart
          </h1>

          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 text-sm font-medium text-[#2A254B] border-b pb-4 mb-6">
            <p>Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-right">Total</p>
          </div>

          {/* Cart Items */}
          <div className="space-y-6">
            {/* Product 1 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <Image
                src="/images/product1.png"
                alt="Product 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <div className="flex items-center justify-center">
                <div className="w-[122px] h-[46px] flex items-center justify-center bg-white border border-[#EBE8F4] rounded-md">
                  <p className="font-[Satoshi] text-lg">1</p>
                </div>
              </div>
              <p className="text-right text-lg font-medium">£85</p>
            </div>

            {/* Product 2 */}
            <div className="grid grid-cols-3 gap-4 items-center">
              <Image
                src="/images/product2.png"
                alt="Product 2"
                width={200}
                height={200}
                className="rounded-md"
              />
              <div className="flex items-center justify-center">
                <div className="w-[122px] h-[46px] flex items-center justify-center bg-white border border-[#EBE8F4] rounded-md">
                  <p className="font-[Satoshi] text-lg">1</p>
                </div>
              </div>
              <p className="text-right text-lg font-medium">£125</p>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="mt-44 flex flex-col items-end space-y-4"> {/* Increased margin-top */}
            {/* Subtotal Line */}
            <div className="flex items-center space-x-2 text-lg font-medium text-[#2A254B] ">
              <p>Subtotal:</p>
              <p>£210</p>
            </div>

            {/* Taxes Info */}
            <p className="text-sm text-[#4E4D93]">
              Taxes and shipping are calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="w-[172px] h-[56px] bg-[#2A254B] text-white rounded-md hover:bg-[#1f1b3a]">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
