import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import { Dropdown, Ripple, initTE } from "tw-elements";
import { Link } from "react-router-dom";

function Navbar() {
  // this state use to open & close Side bar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // this state usnig dropdown on hover & use only language & currency Dropdown
  const [isHoveredEng, setIsHoveredEng] = useState(false);
  const [isHoveredUSD, setIsHoveredUSD] = useState(false);

  // this  state top center Text Change
  const [displayText, setDisplayText] = useState(
    "Trendy 25silver jewelry, save up 35% off today"
  );

  useEffect(() => {
    initTE({ Dropdown, Ripple });

    // Function to change text after 2 seconds
    const changeText = () => {
      setDisplayText("100% Secure delivery without contacting the courier");
    };

    // Set a timeout to trigger the text change after 2 seconds
    setTimeout(changeText, 2000);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* side bar content */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* main top lin div */}
      {/* this content show on large screen */}
      <div
        id="top_div"
        className="lg:flex  hidden justify-between border-b items-center text-sm "
      >
        {/* top right content div */}

        <div className=" p-2  text-gray-600">
          <ul className="flex gap-3 items-center  ">
            <li className="hover:text-gray-800 cursor-pointer">About Us</li>
            <div className="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer">My Account</li>
            <div className="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer">Whislist</li>
            <div className="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li className="hover:text-gray-800 cursor-pointer">
              Order Tracking
            </li>
          </ul>
        </div>

        {/*top center Content */}

        <div className="p-2">
          <h1 className="text-gray-600 animate-fade-in">{displayText}</h1>
        </div>

        {/* top Left content div */}

        <div className="p-2">
          <ul className="flex gap-3 items-center">
            <li className="text-gray-600">Need help? Call Us:</li>

            <li className="text-[#3BB77E]">+ 1800 900</li>
            <div className="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li
              className="dropdown-container"
              onMouseEnter={() => setIsHoveredEng(true)}
              onMouseLeave={() => setIsHoveredEng(false)}
            >
              <button className="dropdown-trigger flex items-center text-gray-600">
                English
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 14.586 6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L4.293 9.707a1 1 0 0 1 1.414-1.414L12 14.586z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className={`dropdown-content ${isHoveredEng ? "open" : ""}`}>
                {/* {/ Dropdown content goes here /} */}
                <p className="flex items-center gap-1">
                  <img
                    className="h-3 w-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-fr.png"
                    alt=""
                  />
                  Français
                </p>
                <p className="flex items-center gap-1">
                  <img
                    className="h-3 w-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-dt.png"
                    alt=""
                  />
                  Deutsch
                </p>
                <p className="flex items-center gap-1">
                  <img
                    className="h-3 w-4"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/flag-ru.png"
                    alt=""
                  />
                  Pусский
                </p>
              </div>
            </li>

            <div className="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <li
              className="dropdown-container"
              onMouseEnter={() => setIsHoveredUSD(true)}
              onMouseLeave={() => setIsHoveredUSD(false)}
            >
              <button className="dropdown-trigger flex items-center text-gray-600">
                USD
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12 14.586 6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L4.293 9.707a1 1 0 0 1 1.414-1.414L12 14.586z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className={`dropdown-content ${isHoveredUSD ? "open" : ""}`}>
                {/* {/ Dropdown content goes here /} */}
                <p>PKR</p>
                <p>DHR</p>
                <p>INR</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* this content show on medium screen */}
      <div id="top_div" className="lg:hidden p-2 bg-[#3BB77E] ">
        <p className="text-white md:text-sm text-xs text-center">
          Grand opening up to 15% off all items. Only{" "}
          <span className="font-semibold">3 days left</span>
        </p>
      </div>

      {/* Navbar div */}

      <div className="flex justify-between mt-3  mx-3   items-center">
        <div>
          <Link to="/">
            <img
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
              className=" sm:h-[3.8rem] h-[2.5rem]  "
              alt=""
            />
          </Link>
        </div>

        {/* this content show on medium screen */}
        <div className="lg:hidden">
          <svg
            onClick={toggleSidebar}
            width="30"
            height="30"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#000000"
              fillRule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            />
          </svg>
        </div>

        <div className="lg:hidden flex gap-3">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-heart.svg"
            alt=""
          />
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
            alt=""
          />
        </div>

        {/* search bar div */}
        {/* This content show on large Screen */}
        <div className=" lg:flex hidden w-[50%]  ">
          <div className="border-2 flex w-full  items-center rounded-sm p-2.5">
            <div className="relative" data-te-dropdown-ref>
              <button
                className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black "
                id="dropdownMenuButton1ds"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                All Categories
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1ds"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Milk & Categories
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Wines & Alcohol
                  </a>
                </li>

                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Clothing & Beauty
                  </a>
                </li>
              </ul>
            </div>

            <div className="h-3 w-0.5 bg-gray-300 ml-1"></div>

            <input
              type="text"
              className="outline-none px-3 w-[80%]"
              placeholder="Search for items..."
              name=""
              id=""
            />

            <svg
              height="25"
              viewBox="0 0 20 20"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m8.5 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.3387897-.4783412 2.5658568-1.2734386 3.5196163l4.126992 4.1268303c.1952621.1952622.1952621.5118446 0 .7071068-.1735664.1735663-.4429908.1928515-.6378589.0578554l-.0692479-.0578554-4.1268303-4.126992c-.9537595.7950974-2.1808266 1.2734386-3.5196163 1.2734386-3.03756612 0-5.5-2.4624339-5.5-5.5 0-3.03756612 2.46243388-5.5 5.5-5.5zm0 1c-2.48528137 0-4.5 2.01471863-4.5 4.5 0 2.4852814 2.01471863 4.5 4.5 4.5 2.4852814 0 4.5-2.0147186 4.5-4.5 0-2.48528137-2.0147186-4.5-4.5-4.5z"
                fill="#212121"
              />
            </svg>
          </div>
        </div>

        {/* this content show on large screen */}
        {/* right side icons */}

        <div className="lg:flex items-center hidden space-x-4  ">
          <SmallIcon_text
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-compare.svg"
            text="Compare"
          />

          <SmallIcon_text
            image="https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png"
            text="Whislist"
          />

          <SmallIcon_text
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
            text="Cart"
          />

          <SmallIcon_text
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-user.svg"
            text="Account"
          />
        </div>
      </div>

      {/* browse home deals etc div */}
      {/* this content show on large screen */}
      <div
        id="browse_deals"
        className="mt-5 lg:flex hidden items-center justify-between border-t border-b p-3"
      >
        <div>
          <button className="bg-[#3BB77E] hover:bg-[#45a076] duration-200 ease-in-out cursor-pointer px-4 py-2.5  flex font-bold text-white  rounded-md">
            <svg
              viewBox="0 0 512 512"
              className="w-4 h-4"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24h-192c-13.255 0-24-10.745-24-24v-160c0-13.255 10.745-24 24-24zm-80 0h-192c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24v-160c0-13.255-10.745-24-24-24zm-216 264v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24v-160c0-13.255-10.745-24-24-24h-192c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24v-160c0-13.255-10.745-24-24-24h-192c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z" />
            </svg>
            <select
              name=""
              id=""
              className="bg-transparent  cursor-pointer gap-2 outline-none"
            >
              <option value="">Browse All Categories</option>
            </select>
          </button>
        </div>

        <div>
          <ul
            id="browse_deals"
            className="flex gap-7 text-sm text-gray-600 items-center font-semibold"
          >
            <li className="flex gap-2 cursor-pointer hover:text-[#3BB77E] duration-300  ease-in-out">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-hot.svg"
                alt=""
              />
              Deals
            </li>

            <li className=" ">
              <AllDropdown name="Home" />
            </li>

            <Link
              to="/About"
              className="cursor-pointer hover:text-[#3BB77E] duration-300  "
            >
              About
            </Link>

            <li className="cursor-pointer hover:text-[#3BB77E] duration-300  ">
              <AllDropdown name="Shops" />
            </li>

            <li className="cursor-pointer hover:text-[#3BB77E] duration-300 hover:mb-1  ">
              <AllDropdown name="Vendors" />
            </li>

            <li className="cursor-pointer hover:text-[#3BB77E] duration-300 hover:mb-1 ">
              <AllDropdown name="Mega Menu" />
            </li>

            <li className="cursor-pointer hover:text-[#3BB77E] duration-300 hover:mb-1 ">
              <AllDropdown name="Blogs" />
            </li>

            <li className="cursor-pointer hover:text-[#3BB77E] duration-300 hover:mb-1 ">
              <AllDropdown name="Page" />
            </li>

            <li className="cursor-pointer hover:text-[#3BB77E] duration-300  ">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-1">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-headphone.svg"
            alt=""
          />
          <p className="text-xl leading-none text-left text-[#3BB77E] font-bold">
            1900 - 888 <br />
            <span className="text-xs text-gray-400">24/7 Support Center</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


// this components use for text & icon like compare ,Whislist account & Cart
export const SmallIcon_text = ({ image, text }) => {
  return (
    <>
      <div className="lg:flex items-center hidden space-x-4  ">
        <p className="flex text-sm text-gray-600">
          <img src={image} className="px-1 h-6 w-8" alt="" />
          {text}
        </p>
      </div>
    </>
  );
};



// this components use for dropdown
export const AllDropdown = ({ name }) => {
  return (
    <>
      <div data-te-dropdown-ref>
        <button
          className="flex items-center whitespace-nowrap hover:text-[#3BB77E] duration-300  rounded bg-primary px-2 pb-2 pt-2.5 text-xs  text-black "
          id="dropdownMenuButton1ds"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="white"
        >
          {name}
          <span className="ml-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1ds"
          data-te-dropdown-menu-ref
        >
          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to="/Signup"
              data-te-dropdown-item-ref
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to="/vendor"
              data-te-dropdown-item-ref
            >
              Vendor
            </Link>
          </li>
          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to="/Whislist"
              data-te-dropdown-item-ref
            >
              Whislist
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to="/ShopList"
              data-te-dropdown-item-ref
            >
              Shop List
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to="/Snack"
              data-te-dropdown-item-ref
            >
              Right Side Shop Grid
            </Link>
          </li>

          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline  disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              to="/LeftSide"
              data-te-dropdown-item-ref
            >
              Left Side Shop Grid
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
