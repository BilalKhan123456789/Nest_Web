import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const secondSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,

    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 3000 ms = 3 seconds)
  };

  const secondSliderImg = [
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-2.png",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-3.png",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-2.png",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-3.png",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-2.png",

    // Add more image URLs as needed
  ];

  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="w-full md:flex-row flex-col flex p-5 space-x-4  ">
        {/* image div */}
        <div className="md:w-1/2 w-full   ">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png"
            className="rounded-3xl"
            alt=""
          />
        </div>

        {/* text div */}
        <div className="md:w-1/2 w-full ">
          <h1 className="px-14 py-14  text-4xl font-bold text-[#253D4E]">
            Welcome to Nest
          </h1>
          <p className="px-14 text-sm text-gray-500 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>

          <p className="px-14 mt-5 text-sm text-gray-500 text-justify">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>

          {/* Small Slider */}

          <Slider
            className="outline-none w-full h-full  mx-7 mt-14 "
            {...secondSlider}
          >
            {secondSliderImg.map((image, index) => (
              <div key={index} className=" outline-none    ">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="   h-[100%] w-[90%] hover:scale-125 transition-all duration-500 mr-10 border border-gray-200 "
                                  />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Provide Section */}

      <h1 className="md:text-4xl text-xl text-center mt-5">What We Provide</h1>
      <img
        className="mx-auto mt-2"
        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png"
        alt=""
      />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24  mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 gap-1 -mb-10  -mt-4">
            <Provide_Cards
              name="Best Prices & Offers"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
            />

            <Provide_Cards
              name="Wide Assortment"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
            />

            <Provide_Cards
              name="Free Delivery"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
            />

            <Provide_Cards
              name="Easy Returns"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
            />

            <Provide_Cards
              name="100% Satisfaction"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"
            />

            <Provide_Cards
              name="Great Daily Deal"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
            />
          </div>
        </div>
      </section>







      
    </div>
  );
}

export default About;













export const Provide_Cards = ({ image, name }) => {
  return (
    <>
      <div className="p-4 md:w-[32%] border hover:shadow-xl rounded-xl duration-300 sm:mb-0 mb-6">
        <div className="h-52 flex    overflow-hidden">
          <img
            alt="content"
            className="h-1/2 w-1/2 my-auto  mx-auto"
            src={image}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 text-center mt-5">
          {name}
        </h2>
        <p className="text-sm  text-center mt-2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
        <a className="text-green-600 cursor-pointer  flex justify-center items-center  mt-3">
          Read More
          <svg
            fill="none"
            height="16"
            width="16"
            className="hover:ml-2 duration-300"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </>
  );
};
