import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed h-screen bg-white  w-80 transition-transform z-10 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Heading div */}
      <div className="flex justify-between items-center m-3">
        <img
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
          className=" h-[2rem]  "
          alt=""
        />

        <div
          onClick={toggleSidebar}
          className="bg-[#DEF9EC]  flex items-center justify-center  h-8 w-8 rounded-full"
        >
          <h1 className="text-black text-sm ">X</h1>
        </div>
      </div>

      {/* Search Bar div */}
      <div className="bg-gray-100 flex justify-between rounded-md items-center px-2 m-5 mt-16">
        <input
          type="text"
          placeholder="Search for items..."
          className="outline-none bg-transparent p-3 placeholder:text-black "
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

      {/* Home About list  */}

      <div className="m-5">
        <ul className="leading-[50px] text-gray-600">


          <li className="flex justify-between border-b items-center">
            Home
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Vendors
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Mega Menu
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Blogs
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Pages
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>

          <li className="flex justify-between border-b items-center">
          Language
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              className="h-4 w-4"
              alt=""
            />
          </li>
        </ul>
      </div>


{/* Location Sign/in sign/up list */}

<div className=" mx-16 mt-10">
  <ul className="leading-8">

    <li className="flex  items-center">
      <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-broche-de-localisation-verte.png" className="h-5 w-5" alt="" />
      Our Location</li>


      <li className="flex  items-center">
        <img src="" alt="" />
      Log in / Sign Up
      </li>


      <li className="flex  items-center">
      (+01) - 2345 - 6789
      </li>



  </ul>
</div>









    </div>
  );
};

export default Sidebar;
