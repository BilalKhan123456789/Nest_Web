import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Featuredcat from "../Featuredcat";

function ImgSlider() {
  return (
    <div className="w-[100%]  h-full mt-7 px-2 ">

      {/* this swiper render Image Slider */}
    <Swiper
      cssMode={true}
      pagination={true}
      navigation={true}
      mousewheel={false}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper w-[98%] h-full rounded-3xl "
    >
      <SwiperSlide >
        <div className="relative lg:h-[500px] md:h-[400px] h-[320px] ">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png"
            alt=""
            className=" object-cover"
          />

          <div
            className="absolute top-0 left-0  lg:p-[100px] md:p-[80px] p-[40px] lg:w-[800px] md:w-[600px]"
            id="browse_deals"
          >
            <p className="text-4xl font-bold text-gray-700 lg:text-[65px] md:text-[50px] text-[30px] text-left leading-[1]">
              Dont miss amazing crocery deals
            </p>
            <p className=" text-left lg:text-[25px] md:text-[20px] text-[13px] mt-7 text-gray-500">
              Signup for the daily newsletter
            </p>
            <div className="bg-white flex  justify-start lg:w-[420px] md:w-[350px] h-14 rounded-full mt-5">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1 my-4 w-[10%]"
              >
                <g
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="m7.39999 6.32003 8.49001-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.48997c-1.9 5.71-5.02 5.71-6.92 0l-.84001-2.52-2.52-.84c-5.71-1.9-5.71-5.00997 0-6.91997z" />
                  <path d="m10.11 13.6501 3.58-3.59" />
                </g>
              </svg>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email addres"
                className="rounded-full w-[50%] text-sm placeholder-text-[10px] outline-none"
              />
              <div className="w-[40%] h-[100%] bg-[#3BB77E] cursor-pointer hover:bg-[#44b882ef] duration-300 rounded-full ">
                <p className="text-white text-[15px] p-4">Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative lg:h-[500px] md:h-[400px] h-[320px]">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png"
            alt=""
            className="  object-cover"
          />

          <div
            className="absolute top-0 left-0  lg:p-[100px] md:p-[80px] p-[40px] lg:w-[800px] md:w-[600px]"
            id="browse_deals"
          >
            <p className=" lg:text-[65px] md:text-[50px] text-[30px] font-bold text-gray-700  text-left leading-[1]">
              Fresh vagetables big discount
            </p>
            <p className=" text-left lg:text-[25px] md:text-[20px] text-[13px] mt-7 text-gray-500">
              Save upto 50% off on your first order
            </p>
            <div className="bg-white flex  justify-start lg:w-[420px] md:w-[350px] h-14 rounded-full mt-5">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-1 my-4 w-[10%]"
              >
                <g
                  stroke="#292d32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="m7.39999 6.32003 8.49001-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.48997c-1.9 5.71-5.02 5.71-6.92 0l-.84001-2.52-2.52-.84c-5.71-1.9-5.71-5.00997 0-6.91997z" />
                  <path d="m10.11 13.6501 3.58-3.59" />
                </g>
              </svg>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email addres"
                className="rounded-full w-[50%] text-sm placeholder-text-[10px] outline-none"
              />
              <div className="w-[40%] h-[100%] bg-[#3BB77E] cursor-pointer hover:bg-[#44b882ef] duration-300 rounded-full ">
                <p className="text-white text-[15px] p-4">Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>


{/* Its Components Render Feature Cards Products */}
<Featuredcat/>



  </div>
  );
}

export default ImgSlider;
