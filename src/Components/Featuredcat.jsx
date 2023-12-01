import React,{useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Featured_Categories} from "../LocalDataBase/Index";
import PopularPro from "./PopularPro";
import DealyBest from "../Components/DailyBestDeals/DealyBest"


function Featuredcat() {


// this state save All Category first render on UI
const [Feature_data,setFeature_data] = useState(Featured_Categories.all)


// this state Change Category when you click Tabs bar
const [selectedCategory, setSelectedCategory] = useState("");



// this Function Change Category when you click Tabs bar
const handelProduct=()=>{

  if(selectedCategory=="all"){

    setFeature_data(Featured_Categories.all)

  }else if(selectedCategory==("Cake")){

    setFeature_data(Featured_Categories.Cake)

  }else if(selectedCategory=="Coffee"){

    setFeature_data(Featured_Categories.Coffee)

  }else if(selectedCategory=="petfood"){

    setFeature_data(Featured_Categories.petfood)

  }else if(selectedCategory=="vegetable"){

    setFeature_data(Featured_Categories.Meats)

  }
}



// its state using responsive Swiper Slider 
  const [isMobile, setIsMobile] = useState(window.innerWidth);

    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);




  const slides = isMobile < 768 ? 3

            : isMobile <1024  ? 4
            : isMobile <1200  ? 7
            : 10 ;

  return (
    <>
      <div className="sm:my-10 my-5 mx-5">
        {/* Feature Categories Heading */}
        <div className="flex  flex-wrap  sm:items-end">
          <h1 className="sm:text-3xl text-xl flex-wrap text-[#253D4E] font-bold">
            Featured Categories
          </h1>

          <div className="sm:ml-5 flex mt-2 text-xs sm:text-sm ">
          
                <ul className="flex  space-x-2 sm:space-x-6 ">
                <li onClick={()=>handelProduct(setSelectedCategory("all"))}  className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">All </li>

                <li onClick={()=>handelProduct(setSelectedCategory("Cake"))}  className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Cake & Milk </li>
                <li onClick={()=>handelProduct(setSelectedCategory("Coffee"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Coffee & Teas </li>
                <li onClick={()=>handelProduct(setSelectedCategory("petfood"))} className="hover:text-[#3BB77E] cursor-pointer   duration-300  ">Pet Foods </li>
                </ul>
             
          </div>

        </div>

        {/* swiper div  */}

        <Swiper

          watchSlidesProgress={true}
          slidesPerView={slides}
          
          spaceBetween={10}
         
        >
          {/* This Map Use for Show All Feature Categories Data */}
          {Feature_data.map((Item, Index) => {
            return (
              <>
                <SwiperSlide
                  key={Index}
                  className="bg-[#F4F6FA] border hover:shadow-xl hover:duration-300   gap-3 mt-3 p-3.5"
                >
                  <div className="cursor-pointer ">
                    <img className="!h-20 !w-20  hover:scale-125 transition-all duration-500" src={Item.img} alt="" />
                    <h1 className="sm:text-[15px] text-[13px] hover:text-[#3BB77E] duration-300   text-[#253D4E]">{Item.name}</h1>
                    <p className="sm:text-xs text-[10px] text-[#253D4E]">{Item.item}</p>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>

        {/* Three Card Shop now cards */}

        <div className="w-[100%]  md:mx-auto px-5">
        <div
          className="flex flex-wrap md:justify-around justify-center  w-[98%] my-9 text-gray-900"
          id="FeaturedCategories"
        >



          <MainScreenCars text="Everyday Fresh & Clean with Our Products" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"/>


          <MainScreenCars text="Make your Breakfast Healthy and Easy" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png"/>


          <MainScreenCars text="The best Organic Products Online" image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"/>


   



       


          
        </div>
      </div>




        {/* This components Show all Popular data */}

        <PopularPro />
        <DealyBest/>
      </div>
    </>
  );
}

export default Featuredcat;





const MainScreenCars = ({image,text})=>{
  return(
    <>
    
    
    
    <div className="relative lg:w-[32.5%] md:w-[48%] rounded-lg py-3">
            <img
              src={image} // Replace with your actual image URL
              alt="Your Image Alt Text"
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute  top-0 -left-4 w-[320px] p-8 cursor-pointer">
              <p className="sm:text-2xl font-bold text-[13px] hover:mt-2 duration-300 lg:leading-8 md:leading-6 leading-6">
                {text}
              </p>
              <button className="bg-[#3BB77E] mt-5 text-sm flex hover:bg-orange-500 text-white sm:py-1.5 sm:px-3 px-0.5 py-0.5 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
    
    
    
    
    
    </>
  )
}
