import React from 'react';
import Image from "next/image";

const Desktop = () => {
  return (
    <div className="w-full h-auto lg:h-[603px] flex flex-col lg:flex-row">

      {/* Left Content */}
      <div className="w-full lg:w-[720px] h-auto lg:h-[603px] bg-[#ffffff] flex flex-col justify-center px-6 lg:px-10 py-6 lg:py-0">
        <div className="w-full lg:w-[536px] h-auto lg:h-[225px] gap-6 mb-12 lg:mb-20">
          <h1 className="w-full h-auto font-[Clash Display] font-normal text-xl lg:text-2xl leading-8 text-[#2A254B]">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="w-full mt-4 font-[Satoshi] font-normal text-sm lg:text-base leading-6 text-[#505977]">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design, so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>
        <div className="mt-6 lg:mt-10">
          <button className="w-[150px] h-[56px] bg-[#f9f9f9] text-sm lg:text-base font-[Satoshi] font-normal px-6 py-3 rounded mt-5 hover:bg-gray-200">
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[720px] h-auto lg:h-[603px] mt-6 lg:mt-0">
        <Image
          src="/images/image.png"
          alt="image"
          width={720}
          height={603}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Desktop;
