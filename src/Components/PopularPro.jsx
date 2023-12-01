import React,{useState} from "react";
import {Popular_Products_Cards} from "../LocalDataBase/Index";
import { useNavigate } from "react-router-dom";


function PopularPro() {

const nav = useNavigate()

const handleNavigate =()=>{
// this changes the scrolling behavior to "smooth"
window.scrollTo({ top: 0, behavior: 'smooth' });
  nav("/details")
}




  console.log(Popular_Products_Cards)



  const [data,setdata]=useState(Popular_Products_Cards.all)
  const [selectedCategory, setSelectedCategory] = useState("");


const handelProduct=()=>{

  if(selectedCategory=="all"){

    setdata(Popular_Products_Cards.all)

  }else if(selectedCategory==("milk")){

    setdata(Popular_Products_Cards.Milk)

  }else if(selectedCategory=="coffes"){

    setdata(Popular_Products_Cards.coffes)

  }else if(selectedCategory=="petfood"){

    setdata(Popular_Products_Cards.petFood)

  }else if(selectedCategory=="meats"){

    setdata(Popular_Products_Cards.Meats)

  }else if(selectedCategory=="vagi"){

    setdata(Popular_Products_Cards.Milk)

  }else if(selectedCategory=="fruits"){

    setdata(Popular_Products_Cards.petFood)

  }
}


  // this variable store all Featured_Categories_Cards data
  // const Popular_Products_Cards_data = Popular_Products_Cards;

  return (
    <>
      {/* Popular Products Heading */}

      <div className="flex flex-wrap justify-between items-end">
        <h1 className="sm:text-3xl text-xl text-[#253D4E] font-bold">Popular Products</h1>

        <div className="sm:ml-5 flex mt-2 text-xs leading-5 sm:text-sm ">
          
                <ul className="flex flex-wrap space-x-3   sm:space-x-6 ">
                <li  onClick={()=>handelProduct(setSelectedCategory("all"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">All </li>
                <li  onClick={()=>handelProduct(setSelectedCategory("milk"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Milk & Dairies </li>
                <li onClick={()=>handelProduct(setSelectedCategory("coffes"))}  className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Coffee & Teas </li>
                <li onClick={()=>handelProduct(setSelectedCategory("petfood"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Pet Foods </li>
                <li onClick={()=>handelProduct(setSelectedCategory("meats"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Meats </li>
                <li onClick={()=>handelProduct(setSelectedCategory("vagi"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Vegetables </li>
                <li onClick={()=>handelProduct(setSelectedCategory("fruits"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Fruits </li>
                </ul>
             
          </div>
      </div>

      {/* Popular Products Cards */}

      <section className="text-gray-600 body-font">
        <div className="container px-1 py-10 mx-auto">
          <div className="flex flex-wrap  -m-4 space-x-1 md:justify-between justify-center sm:gap-1 md:gap-2">
            {/* this Map show all Products Cards */}

            {data.map((Item, Index) => {
              return (
                <>
                  <div className="sm:w-[32%] w-[75%] lg:w-[19%]  my-2   md:w-[23%] " key={Index}>
                    <div className="h-full border-2 group border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-72 md:h-36 w-1/2 mx-auto object-cover object-center group-hover:hidden hover:scale-125 transition-all duration-500"
                        src={Item.imgFront}
                        alt="blog"
                      />

                      <img
                        src={Item.imgBack}
                        className="hidden group-hover:block   lg:h-72 md:h-36 w-1/2 mx-auto object-cover object-center hover:scale-125 transition-all duration-500"
                        alt=""
                      />

                      <div className="lg:p-6 lg:mt-6 p-3 mt-3 ">
                        <h2 className=" lg:text-xs text-[10px] title-font font-medium text-gray-400 mb-1">
                          {Item.title}
                        </h2>
                        <h1 className="title-font lg:text-lg text-xs font-medium text-gray-900 mb-3">
                          {Item.name}
                        </h1>

                        {/* svg stars div */}
                        <div className=" items-center flex mb-2">
                          <svg
                            width="14"
                            height="13"
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
                            width="14"
                            height="13"
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
                            width="14"
                            height="13"
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
                            width="14"
                            height="13"
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


                    
                

                          <p className="text-xs text-gray-500 ml-2">(4.0)</p>
                        </div>

                        <p className="text-xs">
                          By{" "}
                          <span className="text-[#3BB77E] hover:text-orange-500">
                            NestFood
                          </span>
                        </p>

                        {/* card footer */}

                        <div className="mt-5 flex items-center justify-between">
                          <h1 className="text-[#3BB77E] text-sm  lg:text-[19px]">
                            {Item.newPrice}
                            <del className=" text-xs lg:text-sm ml-2 text-gray-500 ">
                              {Item.oldPrice}
                            </del>
                          </h1>

                          <button  onClick={handleNavigate} className="flex items-center lg:py-2 py-1 px-2 rounded-md  lg:px-3 text-[#23704c] duration-300 hover:text-white hover:bg-[#369066] text-sm gap-2  bg-[#9ee9c6]">
                            <img
                              src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
                              className="h-4 w-4  "
                              alt=""
                            />
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          
        </div>
      </section>
    </>
  );
}

export default PopularPro;
