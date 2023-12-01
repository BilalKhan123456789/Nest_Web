import React from "react";
import SwiperCard from "./SwiperCards";

function DealyBest() {
  return (
    <>
      <div className="sm:flex hidden  justify-between items-end mx-5">
        <h1 className="lg:text-3xl text-2xl text-[#253D4E] font-bold ">Daily Best Sells</h1>

        <div className="ml-5 flex text-sm space-x-6">
          <p className="hover:text-[#3BB77E] cursor-pointer duration-300 ">Featured</p>
          <p className="hover:text-[#3BB77E] cursor-pointer  duration-300">Popular</p>
          <p className="hover:text-[#3BB77E] cursor-pointer  duration-300">New Added</p>
        </div>
      </div>

      {/* main div */}
      <div className="mt-5 sm:flex hidden mx-5">
        {/* side img div */}
        <div className="relative lg:block  hidden">
          <img
            className="rounded-2xl  hover:animate-pulse   w-80 h-full"

            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png"
            alt=""
          />

          <div className="absolute top-7 left-4">
            <h1 className="lg:text-4xl md:text-3xl font-bold text-[#253D4E] ">
              Bring nature <br /> into your <br /> home
            </h1>

            <button className="bg-[#3BB77E] mt-20 ml-5 text-sm duration-300  hover:bg-orange-500 text-white py-1 px-2.5 rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Daily best deals Components */}

        <SwiperCard />
      </div>
    </>
  );
}

export default DealyBest;
