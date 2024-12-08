import Image from "next/image";

const Herosection = () => {
  return (
    <div className="w-full h-[704px] bg-[#ffffff]">
      <div className="w-[1280px] h-[584px] mt-10 mx-auto bg-[#2A254b] flex items-center px-8 relative">
        {/* Right Side: Image */}
        <div className="absolute right-0 top-0 z-0">
          <Image
            src="/images/Right Image.png"
            alt="hero"
            height={584}
            width={520}
            className="object-contain"
          />
        </div>

        {/* Left Side: Text and Button */}
        <div className="mt-28 mb-9">
          <div className="flex-1 z-10 pl-10 mb-40">
            {/* Heading */}
            <h2 className="font-[Clash Display] font-normal leading-10 text-[32px] text-[#ffffff] ">
              The furniture brand for the <br /> future with timeless designs
            </h2>

            {/* Button */}
            <button className="w-[170px] h-[56px] bg-gray-500 flex items-center justify-center text-sm font-medium text-[#fafafa] mb-6 mt-10">
              View Collection
            </button>
          </div>
          <div className="w-[602px] font-[satoshi] font-normal text-sm leading-7 text-[#ffffff] mt-40 pl-10">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
