import React from 'react'

const Club = () => {
  return (
    <div className="w-full h-[481px] bg-[#f9f9f9] flex items-center justify-center">
      <div className="w-[1273px] h-[364px] bg-[#ffffff] flex flex-col items-center justify-center">
        <div className="w-[571px] h-[114px] text-center gap-4">
          <h1 className="font-[Clash Display] font-normal text-4xl leading-10 text-[#2A254B]">
            Join the club and get the benefits
          </h1>
          <p className="font-[Satoshi] font-normal text-base leading-6 text-[#2A254B] mt-4">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more
          </p>
        </div>

        <div className="w-[472px] h-[56px] mt-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-[#f9f9f9] w-80 h-12 p-5 rounded-sm"
          />
          <button className="bg-[#2A254B] text-white h-12 w-32 rounded-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Club
