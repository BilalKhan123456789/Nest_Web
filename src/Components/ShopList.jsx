import React from 'react'
const backgroundImageUrl ="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/header-bg.png";
import {ShopList_Data} from "../LocalDataBase/Index"
import DealsCards from './SnacksCards/DealsCards';



function ShopList() {
  return (
    <>
<div className="px-6  py-5" id="FeaturedCategories">
      <div
        className="h-[200px] rounded-3xl flex  justify-between text-gray-800"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          objectFit: "contain",
        }}
      >

{/* Snacks Heading */}

        <div className="lg:p-16 p-14  lg:w-[40%] w-full flex flex-col">
          <div className="text-[36px]">
            {" "}
            <p>Snacks</p>
          </div>
          <div className="flex mt-2 gap-2">
            <div className="flex ">
              <svg
                height="15"
                viewBox="0 0 24 24"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m20 10.7359622v7.7640378c0 1.3807119-1.1192881 2.5-2.5 2.5h-3c-.2761424 0-.5-.2238576-.5-.5v-6c0-.2761424-.2238576-.5-.5-.5h-3c-.2761424 0-.5.2238576-.5.5v6c0 .2761424-.22385763.5-.5.5h-3c-1.38071187 0-2.5-1.1192881-2.5-2.5v-7.7640378l-.18214637.1500029c-.21316265.1755457-.52827304.1450512-.70381875-.0681115-.17554571-.2131626-.14505115-.528273.06811149-.7038187l8.50000003-7.00000002c.1846279-.15204651.4510793-.15204651.6357072 0l8.5 7.00000002c.2131627.1755457.2436572.4906561.0681115.7038187-.1755457.2131627-.4906561.2436572-.7038187.0681115zm-.9933004-.81801207-7.0066996-5.7702232-7.0066996 5.7702232c.00440713.02669598.0066996.05410521.0066996.08204987v8.5c0 .8284271.67157288 1.5 1.5 1.5h2.5v-5.5c0-.8284271.67157288-1.5 1.5-1.5h3c.8284271 0 1.5.6715729 1.5 1.5v5.5h2.5c.8284271 0 1.5-.6715729 1.5-1.5v-8.5c0-.02794466.0022925-.05535389.0066996-.08204987z"
                  stroke="#3BB77E"
                />
              </svg>
              <span className="text-[12px] text-[#3BB77E] hover:text-orange-400">
                Home
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                  fill="#0D0D0D"
                />
              </svg>
              <span className="text-[12px] text-gray-500 ">Shop</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z"
                  fill="#0D0D0D"
                />
              </svg>
              <span className="text-[12px] text-gray-500 ">Snaks</span>
            </div>
          </div>
        </div>
        <div className="p-24 w-[60%] lg:flex  hidden">
          <div className="h-[35px] flex gap-5 w-full">
            <div className="bg-white flex text-[#3BB77E] w-[20%] rounded-3xl p-2 items-center justify-around ">
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4"
              >
                <path
                  d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z "
                  fill="#94a3b8"
                />
              </svg>
              <p className="text-[14px]">Cabbage</p>
            </div>
            <div className="bg-white flex text-[#3BB77E] w-[20%] rounded-3xl p-2 items-center justify-around">
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4"
              >
                <path
                  d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z "
                  fill="#94a3b8"
                />
              </svg>
              <p className="text-[14px] text-black">Broccoil</p>
            </div>
            <div className="bg-white flex text-[#3BB77E] w-[20%] rounded-3xl p-2 items-center justify-around">
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4"
              >
                <path
                  d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z "
                  fill="#94a3b8"
                />
              </svg>
              <p className="text-[14px]">Artichoke</p>
            </div>
            <div className="bg-white flex text-[#3BB77E] w-[20%] rounded-3xl p-2 items-center justify-around">
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4"
              >
                <path
                  d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z "
                  fill="#94a3b8"
                />
              </svg>
              <p className="text-[14px]">Celery</p>
            </div>
            <div className="bg-white flex text-[#3BB77E] w-[20%] rounded-3xl p-2 items-center justify-around">
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-4 h-4"
              >
                <path
                  d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z "
                  fill="#94a3b8"
                />
              </svg>
              <p className="text-[14px]">Spinach</p>
            </div>
          </div>
        </div>
      </div>




      <div className="w-[100%] lg:flex-row-reverse flex flex-wrap mt-10">
        <div className="lg:w-[80%] md:w-[100%]  ">
          <div className="flex lg:flex-row flex-col justify-between py-5 px-2">
            <p className="text-gray-500 text-[13px] ">
              We found 29 items for you!
            </p>
            <div className="flex gap-2 text-[8px] text-gray-500 lg:mt-0 mt-3">
              <button className="border border-gray-200 px-5 py-2 rounded-lg">
                Show : 50
              </button>
              <button className="border border-gray-200 px-5 py-2 rounded-lg">
                sort by : Featured
              </button>
            </div>
          </div>

          
          {/* this map render Snacks Cards */}
          <div className="w-[98%] flex flex-wrap">
            {ShopList_Data.map((v, i) => {
              return (
                <ShopListcard
                  image1={v.img1}
                  image2={v.img2}
                  cat={v.cat}
                  title={v.title}
                  price1={v.price1}
                  price2={v.price2}
                />
              );
            })}
          </div>

          <div
            className="flex justify-between  py-7  items-center"
            id="FeaturedCategories"
          >
            <div className="">
              <h1 className="w-[98%] flex flex-wrap text-[25px] mx-5 leading-none text-gray-800">
                Deals Of The Day
              </h1>
            </div>

            <div className=" gap-2 text-[13px] flex  flex-nowrap text-gray-700 leading-none items-center ">
              <p className="text-gray-600 ">All Deals</p>
              <svg
                width="20"
                height="20"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <DealsCards />
        </div>

        <div className="lg:w-[20%] w-[100%] ">
          {/* Category start  */}
          <section class="text-gray-600 mt-5 body-font lg:w-[98%] w-full rounded-lg border border-gray-200 shadow-sm">
            <div class="container  flex flex-wrap items-center">
              <div class=" shadow-lg rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 class="text-gray-900 text-lg font-medium title-font mb-3 ">
                  Category
                </h2>
                <div className="w-[25%] h-[2px] bg-[#3BB77E]"></div>
                <div class="relative mt-3 mb-4">
                  <div class="p-2  w-full">
                    <div class="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                      <img
                        alt="team"
                        class="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-medium">
                          Milks & Dairies
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div class="p-2  w-full">
                    <div class="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                      <img
                        alt="team"
                        class="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-medium">
                          Clothing
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div class="p-2   w-full">
                    <div class="h-full flex items-center border-gray-200 hover:shadow-lg duration-300 hover:mb-3 border rounded-lg p-2">
                      <img
                        alt="team"
                        class="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-medium">
                          Pet Foods
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div class="p-2  w-full">
                    <div class="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                      <img
                        alt="team"
                        class="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-medium">
                          Baking material
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div class="p-2  w-full">
                    <div class="h-full flex items-center border-gray-200 border hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                      <img
                        alt="team"
                        class="w-7 h-7 b object-cover object-center flex-shrink-0  mr-4"
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font text-sm font-medium">
                          Fresh Fruit
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Category and  */}
          {/* fill by price start */}
          <div className="lg:w-[98%] w-full shadow-lg border border-gray-200 mt-5 rounded-lg ">
            <h1 className="text-[18px] text-gray-900 px-5 p-5">
              Fill by price
            </h1>
            <div className="w-[90%]  px-4">
              {" "}
              <div className="border-b border-[#3BB77E] w-[30%]"></div>
            </div>
            <div className="flex text-gray-500 px-4 py-3 text-[12px]  justify-between ">
              {" "}
              <p>
                From:<span className="text-[#3BB77E]">$500</span>{" "}
              </p>
              <p>
                To:<span className="text-[#3BB77E]">$1,000</span>{" "}
              </p>
            </div>

            <div className="px-4 py-3 flex flex-col text-[12px] text-gray-500">
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
              </div>
            </div>
            <div className="px-5 p-5">
              <div className="flex  px-3 p-2 w-[40%] rounded-md text-white text- text-[11px] bg-[#3BB77E] items-center">
                <svg
                  fill="none"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#141b34"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path
                      d="m7.00474 2.07612v13.92388c0 2.8284 0 4.2426.88006 5.1213.88007.8787 2.2965.8787 5.1294.8787s4.2493 0 5.1294-.8787.8801-2.2929.8801-5.1213v-8.75c0-.95472.1823-1.49273.7512-2.25.4434-.59037 1.6428-1.74257 1.0758-2.56633-.2984-.43367-1.0584-.43367-2.5782-.43367h-8.263c-2.83292 0-4.24937 0-5.12943.87868-.88007.87868-.88007 2.29289-.88007 5.12132v2"
                      stroke="white"
                    />
                    <path
                      d="m19 8h-3m3 3.3333h-3m3 3.3334h-3m2.5 3.3333h-2.5"
                      stroke="white"
                    />
                  </g>
                </svg>
                <p>Fillter</p>
              </div>
            </div>
          </div>

          {/* fill by price and */}

          {/* new product start  */}

          <div className="lg:w-[98%]  w-full mt-5 shadow-md border border-gray-200 rounded-lg ">
            <section class="text-gray-600 body-font">
              <div class="  flex flex-wrap items-center">
                <div class=" shadow-lg rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  <h2 class="text-gray-900 text-lg font-medium title-font mb-3 ">
                    New products
                  </h2>
                  <div className="w-[25%] h-[2px] bg-green-200"></div>
                  <div class="relative mt-3 mb-4">
                    <div class="p-2  w-full">
                      <div class="h-full flex items-center  hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          class="w-14 h-14 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                        />
                        <div class="flex-grow">
                          <h2 class="text-gray-900 title-font text-base  hover:text-[#3BB77E] duration-300 font-medium">
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

                    <div class="p-2  w-full">
                      <div class="h-full flex items-center  hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          class="w-14 h-14 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                        />
                        <div class="flex-grow">
                          <h2 class="text-gray-900 title-font text-base  hover:text-[#3BB77E] duration-300 font-medium">
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

                    <div class="p-2  w-full">
                      <div class="h-full flex items-center  hover:shadow-lg duration-300 hover:mb-3 rounded-lg p-2">
                        <img
                          alt="team"
                          class="w-14 h-14 b object-cover object-center flex-shrink-0  mr-4"
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                        />
                        <div class="flex-grow">
                          <h2 class="text-gray-900 title-font text-base hover:text-[#3BB77E] duration-300 font-medium">
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

          {/* new product End  */}

          <div className=" w-[98%] lg:block hidden relative my-5 mt-5">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png"
              className="h-full w-full  rounded-lg"
              alt=""
            />

            <div className="absolute top-16 w-28  left-10 text-xs text-gray-500 ">
              <p>Oganic</p>

              <h1 className="text-xl text-black font-bold">
                Save 17% on <span className="text-[#3BB77E]">Oganic</span> Juice
              </h1>
            </div>
          </div>
          {/* new product and  */}
        </div>






      </div>
    </div>
    



      






















      
    </>
  )
}

export default ShopList










export function ShopListcard({ image1, image2, cat, title, price1, price2 }) {
    return (
      <>
        <div className="flex flex-row w-[100%] md:h-[300px] h-[850px] md:border-none border p-2 flex-wrap rounded-xl">
          <div className="sm:w-[30%]  group flex justify-center">
            <img
              src={image1}
              alt=""
              className="border rounded-xl w-[90%] group-hover:hidden  duration-300 object-cover"
            />
            <img
              src={image2}
              alt=""
              className="border rounded-xl w-[90%] hidden group-hover:block duration-300  object-cover"
            />
          </div>
          <div className="sm:w-[70%]  ">
            <div className="flex flex-col mt-5">
              <span className="text-[13px] text-gray-500">{cat}</span>
              <h1 className="text-[28px] text-gray-800 hover:text-[#3BB77E] duration-300 flex flex-wrap">
                {title}
              </h1>
              <p class="leading-relaxed mb-3 flex items-center text-[12px] text-gray-500">
                <svg
                  width="13"
                  height="12"
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
                  width="13"
                  height="12"
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
                  width="13"
                  height="12"
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
                  width="13"
                  height="12"
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
                (4.0)
              </p>
  
              <p className="text-[13px] text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                beatae consectetur, atque inventore aliquam adipisci perspiciatis
                nostrum qui consequatur praesentium?
              </p>
              <div className="flex mt-4 text-[30px] text-[#3BB77E] items-baseline gap-2">
                <span>{price1}</span>
                <span className="text-gray-500 text-[18px]">{price2}</span>
              </div>
              <div className="flex-row flex gap-5">
                <button className="flex items-center justify-center bg-[#3BB77E] w-32 h-8 rounded-sm mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                      fill="white"
                    />
                  </svg>
                  <p className="text-white text-[12px]">Add to cart</p>
                </button>
  
                <button className="flex items-center justify-center  w-32 h-8 rounded-sm mt-3">
                  <svg
                    fill="none"
                    height="20"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#000">
                      <path d="m10.067 16.4409c.334.918 1.306 1.6 2.28 1.6h6.167c.55 0 .996-.444.996-1 0-.2645-.1048-.5183-.2915-.7057-.1866-.1874-.44-.2932-.7045-.2943h-6.167c-.133 0-.355-.156-.401-.284l-.816-2.263zm-2.12699-5.894-.816-2.26298c-.044-.124-.273-.284-.402-.284h-2.724c-.542 0-.998-.448-.998-1 0-.556.447-1 .998-1h2.724c.97 0 1.949.686 2.282 1.6l-1.064 2.94598z" />
                      <path d="m19.51 6.99992c0-.26453-.1048-.51828-.2915-.7057-.1866-.18742-.44-.29324-.7045-.2943h-6.167c-.976 0-1.95.684-2.283 1.605l-2.93999 8.15198c-.044.123-.273.284-.402.284h-2.724c-.1313-.0002-.26136.0255-.3827.0756-.12133.0502-.23154.1239-.32429.2168-.09275.093-.16621.2033-.21616.3248-.04994.1214-.07538.2515-.07485.3828 0 .552.456 1 .998 1h2.724c.972 0 1.953-.689 2.284-1.606l2.93999-8.15098c.046-.128.268-.284.401-.284h6.167c.55 0 .996-.444.996-1z" />
                      <path d="m17.293 8.29292c-.0955.09225-.1717.20259-.2241.32459-.0524.12201-.08.25323-.0811.38601-.0012.13278.0241.26446.0744.38735.0503.1229.1245.23455.2184.32844.0939.0939.2056.16815.3285.21843s.2545.07556.3873.07446c.1328-.0012.264-.02877.386-.08118s.2324-.12859.3246-.2241l1.996-1.996c.0942-.09293.1689-.20363.2199-.32569.0511-.12205.0773-.25302.0773-.38531s-.0262-.26326-.0773-.38531c-.051-.12206-.1257-.23276-.2199-.32569l-1.996-1.996c-.1886-.18216-.4412-.28295-.7034-.28068-.2622.00228-.513.10745-.6984.29286s-.2906.43622-.2929.69842c-.0022.26219.0985.5148.2807.7034l1.293 1.293zm0 9.99998c-.1822.1886-.2829.4412-.2807.7034.0023.2622.1075.513.2929.6984s.4362.2906.6984.2929.5148-.0985.7034-.2807l1.996-1.996c.0942-.0929.1689-.2036.2199-.3257.0511-.122.0773-.253.0773-.3853s-.0262-.2632-.0773-.3853c-.051-.122-.1257-.2328-.2199-.3257l-1.996-1.996c-.1886-.1821-.4412-.2829-.7034-.2807-.2622.0023-.513.1075-.6984.2929s-.2906.4362-.2929.6984c-.0022.2622.0985.5148.2807.7034l1.293 1.293z" />
                    </g>
                  </svg>
  
                  <p className="text-black text-[12px]">Add Compare</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  

  
  
  
  
