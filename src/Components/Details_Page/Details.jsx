import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Details() {


  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };




  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 3000 ms = 3 seconds)
  };

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

  const images = [
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-1.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg",

    // Add more image URLs as needed
  ];

  const secondSliderImg = [
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg",
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-10.jpg",

    // Add more image URLs as needed
  ];

  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  return (
    <>
      <div className="w-full    ">
        <div className="flex flex-wrap">
          <div className="lg:w-[75%] md:w-full w-[100%]  flex flex-wrap">
            <div className="md:w-[45%] w-[98%]">
              <Slider
                className="outline-none w-[95%] p-5  rounded-2xl"
                {...settings}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className=" outline-none  gap-2 border border-gray-200 rounded-2xl "
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="  object-cover  rounded-2xl hover:scale-125 transition-all duration-500"
                    />
                  </div>
                ))}
              </Slider>

              <Slider
                className="outline-none w-[95%] mx-7 rounded-xl"
                {...secondSlider}
              >
                {secondSliderImg.map((image, index) => (
                  <div key={index} className=" outline-none   gap-2  ">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="  object-cover h-[50%] w-[50%] border border-gray-200 rounded-xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="md:w-[50%] w-[98%] ">
              <div className="w-[100%]">
                <div className="p-7 ">
                  <button className="py-1 px-2 rounded-md text-[13px] text-red-500 border border-gray-200 bg-red-200">
                    Sale Off
                  </button>

                  <p className="text-[33px] text-gray-900 mt-5 ">
                    Seeds of Change Organic Quinoa, Brown
                  </p>

                  <div className=" items-center flex mt-5">
                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                        fill="#FFE033"
                      />
                    </svg>

                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                        fill="#FFE033"
                      />
                    </svg>

                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                        fill="#FFE033"
                      />
                    </svg>

                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                        fill="#FFE033"
                      />
                    </svg>

                    <svg
                      width="12"
                      height="11"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Star 1"
                        d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                        fill="#FFE033"
                      />
                    </svg>

                    <p className="text-gray-500 text-xs ml-2">(32 reviews)</p>
                  </div>

                  <div className="flex items-center leading-none mt-10 ">
                    <p className="text-green-700 text-[50px]">$38</p>
                    <div className="flex-col flex">
                      <p className="text-yellow-300 text-[12px]">26% Off</p>
                      <del className="text-gray-400 text-[25px] ">$52</del>
                    </div>
                  </div>

                  <p className="text-gray-600 text-[15px] mt-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam rem officia, corrupti reiciendis minima nisi modi,
                    quasi, odio minus dolore impedit fuga eum eligendi.
                  </p>

                  <div className=" flex flex-row text-gray-600 text-[15px] mt-5 items-center  h-[40px] ">
                    <p>Size / Weight:</p>
                    <div className="flex flex-row text-[13px] gap-5 justify-between p-2">
                      <button className="duration-300 border border-transparent hover:border hover:border-green-700 hover:rounded-lg hover:text-white hover:bg-green-700 p-2 outline-none">
                        50g
                      </button>
                      <button className="duration-300 border border-transparent hover:border hover:border-green-700 hover:rounded-lg hover:text-white hover:bg-green-700 p-1 outline-none">
                        60g
                      </button>
                      <button className="duration-300 border border-transparent hover:border hover:border-green-700 hover:rounded-lg hover:text-white hover:bg-green-700 p-1 outline-none">
                        {" "}
                        80g
                      </button>
                      <button className="duration-300 border border-transparent hover:border hover:border-green-700 hover:rounded-lg hover:text-white hover:bg-green-700 p-1 outline-none">
                        {" "}
                        100g
                      </button>
                      <button className="duration-300 border border-transparent hover:border hover:border-green-700 hover:rounded-lg hover:text-white hover:bg-green-700 p-1 outline-none">
                        150g
                      </button>
                    </div>
                  </div>

                  <div className="w-[100%] flex flex-row gap-2  h-[40px] mt-5">
                    <div className="w-[20%] border border-green-700 rounded-lg text-center p-2">
                 
                    {count}
                    </div>
                    <button className="w-[35%] border border-green-700 bg-[#3BB77E] hover:bg-[#28694b] duration-300 rounded-lg flex flex-row justify-evenly p-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                        width="20"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                          stroke="white"
                          fill="white"
                        />
                      </svg>
                      <p className="text-white text-[14px]">Add to cart</p>
                    </button>

                    {/* heart svg */}

                    <div className="w-[10%] border border-gray-200 hover:bg-gray-200 duration-300 cursor-pointer rounded-lg p-3">
                      <svg
                        id="Flat"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-5 h-5"
                      >
                        <path
                          d="M128.01172,222a5.99681,5.99681,0,0,1-2.93164-.765,315.04431,315.04431,0,0,1-51.082-37.27527C39.502,152.91382,22.01172,121.97406,22.01172,92a58.01662,58.01662,0,0,1,106-32.59509A58.01662,58.01662,0,0,1,234.01172,92c0,29.97406-17.49024,60.91382-51.98633,91.95972a315.04479,315.04479,0,0,1-51.082,37.27527A5.99681,5.99681,0,0,1,128.01172,222Zm-48-176a46.05223,46.05223,0,0,0-46,46c0,57.3255,77.78613,107.25671,94,117.03735,16.21387-9.78064,94-59.71185,94-117.03735a46.00872,46.00872,0,0,0-88.46387-17.72156,6,6,0,0,1-11.07226,0A45.90889,45.90889,0,0,0,80.01172,46Z"
                          stroke="gray"
                        />
                      </svg>
                    </div>
                    <div className="w-[10%] border border-gray-200 hover:bg-gray-200 duration-300 cursor-pointer rounded-lg p-2">
                      <svg
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#000">
                          <path d="m10.067 16.4409c.334.918 1.306 1.6 2.28 1.6h6.167c.55 0 .996-.444.996-1 0-.2645-.1048-.5183-.2915-.7057-.1866-.1874-.44-.2932-.7045-.2943h-6.167c-.133 0-.355-.156-.401-.284l-.816-2.263zm-2.12699-5.894-.816-2.26298c-.044-.124-.273-.284-.402-.284h-2.724c-.542 0-.998-.448-.998-1 0-.556.447-1 .998-1h2.724c.97 0 1.949.686 2.282 1.6l-1.064 2.94598z" />
                          <path d="m19.51 6.99992c0-.26453-.1048-.51828-.2915-.7057-.1866-.18742-.44-.29324-.7045-.2943h-6.167c-.976 0-1.95.684-2.283 1.605l-2.93999 8.15198c-.044.123-.273.284-.402.284h-2.724c-.1313-.0002-.26136.0255-.3827.0756-.12133.0502-.23154.1239-.32429.2168-.09275.093-.16621.2033-.21616.3248-.04994.1214-.07538.2515-.07485.3828 0 .552.456 1 .998 1h2.724c.972 0 1.953-.689 2.284-1.606l2.93999-8.15098c.046-.128.268-.284.401-.284h6.167c.55 0 .996-.444.996-1z" />
                          <path
                            d="m17.293 8.29292c-.0955.09225-.1717.20259-.2241.32459-.0524.12201-.08.25323-.0811.38601-.0012.13278.0241.26446.0744.38735.0503.1229.1245.23455.2184.32844.0939.0939.2056.16815.3285.21843s.2545.07556.3873.07446c.1328-.0012.264-.02877.386-.08118s.2324-.12859.3246-.2241l1.996-1.996c.0942-.09293.1689-.20363.2199-.32569.0511-.12205.0773-.25302.0773-.38531s-.0262-.26326-.0773-.38531c-.051-.12206-.1257-.23276-.2199-.32569l-1.996-1.996c-.1886-.18216-.4412-.28295-.7034-.28068-.2622.00228-.513.10745-.6984.29286s-.2906.43622-.2929.69842c-.0022.26219.0985.5148.2807.7034l1.293 1.293zm0 9.99998c-.1822.1886-.2829.4412-.2807.7034.0023.2622.1075.513.2929.6984s.4362.2906.6984.2929.5148-.0985.7034-.2807l1.996-1.996c.0942-.0929.1689-.2036.2199-.3257.0511-.122.0773-.253.0773-.3853s-.0262-.2632-.0773-.3853c-.051-.122-.1257-.2328-.2199-.3257l-1.996-1.996c-.1886-.1821-.4412-.2829-.7034-.2807-.2622.0023-.513.1075-.6984.2929s-.2906.4362-.2929.6984c-.0022.2622.0985.5148.2807.7034l1.293 1.293z"
                            stroke="gray"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%]  p-10">
              <div className="border border-gray-300 rounded-xl font-normal">
                <p className="px-10 py-5 text-xs text-justify text-gray-400">
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart. Spluttered narrowly yikes left
                  moth in yikes bowed this that grizzly much hello on spoon-fed
                  that alas rethought much decently richly and wow against the
                  frequent fluidly at formidable acceptably flapped besides and
                  much circa far over the bucolically hey precarious goldfinch
                  mastodon goodness gnashed a jellyfish and one however because.
                </p>

                <ul className="list-disc lg:block hidden text-gray-400 text-[12px] w-[40%] text-left px-10 py-5">
                  <li className=" flex justify-between">
                    <p>. Type Of Packing</p> <p>Bottle</p>
                  </li>
                  <li className="flex justify-between">
                    <p>. Color</p> <p>Green, Pink, Powder Blue, Purple</p>
                  </li>
                  <li className="flex justify-between">
                    <p>. Quantity Per Case</p> <p>100ml</p>
                  </li>
                  <li className="flex justify-between">
                    <p>. Ethyl Alcohol</p> <p>70%</p>
                  </li>

                  <li className="flex justify-between">
                    <p>. Piece In One</p> <p>Carton</p>
                  </li>
                </ul>

                <div className="border-b w-[95%] ml-3"></div>

                <p className="px-10 py-5 text-xs text-justify text-gray-400">
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>

                <h1 className="text-[18px] font-bold text-gray-900 px-10 py-2">
                  Packaging & Delivery
                </h1>

                <div className="border-b w-[95%] ml-3"></div>
                <p className="px-10 py-5 text-xs text-justify text-gray-400">
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly. Scallop or far
                  crud plain remarkably far by thus far iguana lewd precociously
                  and and less rattlesnake contrary caustic wow this near alas
                  and next and pled the yikes articulate about as less cackled
                  dalmatian in much less well jeering for the thanks blindly
                  sentimental whimpered less across objectively fanciful
                  grimaced wildly some wow and rose jeepers outgrew lugubrious
                  luridly irrationally attractively dachshund.
                </p>

                <h1 className="text-[18px] font-bold text-gray-900 px-10 py-2">
                  Suggested Use
                </h1>
                <h1 className="text-xs font-bold text-gray-400 px-10 py-1">
                  Refrigeration not necessary.
                </h1>
                <h1 className="text-xs font-bold text-gray-400 px-10 py-1">
                  Stir before serving
                </h1>
                <h1 className="text-[18px] font-bold text-gray-900 px-10 py-2">
                  Other Ingredients
                </h1>
                <h1 className="text-xs font-bold text-gray-400 px-10 py-1">
                  Organic raw pecans, organic raw cashews.
                </h1>
                <h1 className="text-[10px] font-bold text-gray-400 px-10 py-1">
                  This butter was produced using a LTG (Low Temperature
                  Grinding) process
                </h1>
                <h1 className="text-xs font-bold text-gray-400 px-10 py-1">
                  Made in machinery that processes tree nuts but does not
                  process peanuts, gluten, dairy or soy
                </h1>
                <h1 className="text-[18px] font-bold text-gray-900 px-10 py-2">
                  Warnings
                </h1>
                <h1 className="text-xs font-bold text-gray-400 px-10 py-1">
                  Oil separation occurs naturally. May contain pieces of shell.
                </h1>
              </div>
            </div>
          </div>

          {/* {/ Right side div start  /} */}
          <div className="lg:w-[25%] w-full  ">
            {/* {/ Category start  /} */}
            <section className="text-gray-600 body-font">
              <div className="container  flex flex-wrap items-center">
                <div className=" shadow-lg rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  <h2 className="text-gray-900 text-lg font-medium title-font mb-3 ">
                    Category
                  </h2>
                  <div className="w-[25%] h-[2px] bg-[#3BB77E]"></div>
                  <div className="relative mt-3 mb-4">
                    <div className="p-2  w-full">
                      <div className="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          className="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                        />
                        <div className="flex-grow">
                          <h2 className="text-gray-900 title-font text-sm font-medium">
                            Milks & Dairies
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-2  w-full">
                      <div className="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          className="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg"
                        />
                        <div className="flex-grow">
                          <h2 className="text-gray-900 title-font text-sm font-medium">
                            Clothing
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-2   w-full">
                      <div className="h-full flex items-center border-gray-200 hover:shadow-lg duration-300 hover:mb-3 border rounded-lg p-2">
                        <img
                          alt="team"
                          className="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg"
                        />
                        <div className="flex-grow">
                          <h2 className="text-gray-900 title-font text-sm font-medium">
                            Pet Foods
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-2  w-full">
                      <div className="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          className="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg"
                        />
                        <div className="flex-grow">
                          <h2 className="text-gray-900 title-font text-sm font-medium">
                            Baking material
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-2  w-full">
                      <div className="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          className="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg"
                        />
                        <div className="flex-grow">
                          <h2 className="text-gray-900 title-font text-sm font-medium">
                            Fresh Fruit
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* {/ Category and  /} */}

            {/* {/ price div start /} */}
            <div className="w-[98%] border border-gray-300 mt-5 rounded-lg ">
              <h1 className="text-[18px] text-gray-900 px-5 p-5">
                Fill by price
              </h1>
              <div className="w-[90%]  px-4">
                {" "}
                <div className="border-b border-[#3BB77E] w-[30%]"></div>
              </div>
              <div class="relative mx-5 mb-6">
                <label for="labels-range-input" class="sr-only">
                  Labels range
                </label>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                  From ($500)
                </span>

                <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                  To ($1000)
                </span>
              </div>

              <div className="px-4 py-5 flex flex-col text-[12px] text-gray-500">
                <p className="text-bold">Color</p>

                <div className="py-3 ">
                  <div className="flex gap-2 py-1">
                    <input type="checkbox" />

                    <label htmlFor="">Red(56)</label>
                  </div>

                  <div className="flex gap-2 py-1">
                    <input type="checkbox" />

                    <label htmlFor="">Green (78)</label>
                  </div>

                  <div className="flex gap-2 py-1">
                    <input type="checkbox" />

                    <label htmlFor="">Blue (54)</label>
                  </div>
                </div>

                <p className="text-bold">Item Condition</p>

                <div className="py-3 ">
                  <div className="flex gap-2 py-1">
                    <input type="checkbox" />

                    <label htmlFor="">New (1506)</label>
                  </div>

                  <div className="flex gap-2 py-1">
                    <input type="checkbox" />

                    <label htmlFor="">Refurbished (27)</label>
                  </div>

                  <div className="flex gap-2 py-1">
                    <input type="checkbox" />

                    <label htmlFor="">Used (45)</label>
                  </div>

                  <img
                    className="h-24 float-right w-24"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/fillter-widget-bg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* {/ price div and /} */}

            {/* New Product Div Start */}

            <div className="  w-full  ">
              <section className="text-gray-600 body-font">
                <div className="  flex flex-wrap items-center">
                  <div className=" shadow-lg rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-3 ">
                      New products
                    </h2>
                    <div className="w-[25%] h-[2px] bg-green-200"></div>
                    <div className="relative mt-3 mb-4">
                      <div className="p-2  w-full">
                        <div className="h-full flex items-center  hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                          <img
                            alt="team"
                            className="w-14 h-14 b object-cover object-center flex-shrink-0  mr-4"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font text-base  hover:text-[#3BB77E] duration-300 font-medium">
                              Chen Cardigan
                            </h2>
                            <p className="text-xs">$99.50</p>

                            {/* {/ stars div /} */}
                            <div className="flex ">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-2  w-full">
                        <div className="h-full flex items-center  hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                          <img
                            alt="team"
                            className="w-14 h-14 b object-cover object-center flex-shrink-0  mr-4"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font text-base  hover:text-[#3BB77E] duration-300 font-medium">
                              Chen Sweater
                            </h2>
                            <p className="text-xs">$99.50</p>

                            {/* {/ stars div /} */}
                            <div className="flex ">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-2  w-full">
                        <div className="h-full flex items-center  hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                          <img
                            alt="team"
                            className="w-14 h-14 b object-cover object-center flex-shrink-0  mr-4"
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font text-base hover:text-[#3BB77E] duration-300 font-medium">
                              Colorful Jacket
                            </h2>
                            <p className="text-xs">$25</p>

                            {/* {/ stars div /} */}
                            <div className="flex ">
                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>

                              <svg
                                width="11"
                                height="10"
                                viewBox="0 0 16 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Star 1"
                                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                                  fill="#FFE033"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* New Product Div End */}

            {/* save oganic div */}

            <div className="mx-5 lg:block hidden relative my-5">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png"
                className="h-full w-full  rounded-lg"
                alt=""
              />

              <div className="absolute top-16 w-28  left-10 text-xs text-gray-500 ">
                <p>Oganic</p>

                <h1 className="text-xl text-black font-bold">
                  Save 17% on <span className="text-[#3BB77E]">Oganic</span>{" "}
                  Juice
                </h1>
              </div>
            </div>
          </div>
          {/* {/Right side div and  /} */}
        </div>
      </div>
    </>
  );
}

export default Details;
