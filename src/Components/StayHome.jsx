import React from 'react'
import backimg from "../Asesst/back.jpg"



function StayHome() {
  return (
    <>

<div className='mx-3 hidden sm:block  rounded-xl mt-5'>

<div className='  relative '>
<img className='  relative   w-[100%] rounded-xl ' src={backimg} alt="" />


<div className='absolute top-0  m-6 lg:m-20 '>
<h1 className='lg:text-4xl text-base text-[#253D4E] font-bold '>Stay home & get your daily <br /> needs from our shop</h1>


<p className='lg:text-sm text-xs mt-3 text-gray-500'>Start You'r Daily Shopping with  <span className='text-[#3BB77E]'>Nest Mart</span></p>
 
<div className="sm:flex lg:w-96 w-80 hidden  justify-between mt-4 lg:mt-12 lg:h-14 h-10 items-center p-3 rounded-full bg-white">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  placeholder="Your email address"
                  type="text"
                  className="outline-none placeholder:text-sm"
                  name=""
                  id=""
                />

                <div className="bg-[#3BB77E] p-2.5 lg:p-4 -mr-2.5 text-center  lg:pl-5 duration-300  hover:bg-[#43966f] rounded-full text-white text-sm">
                  <button className="text-center">Subscribe</button>
                </div>
              </div>


</div>



</div> 
      





</div>
  


{/* Free Delivery Card */}




<div className='py-10  '>

<section className="text-gray-600  body-font">
  <div className="container mt-10  mx-auto">
   
    <div className="flex flex-wrap  -m-2">


      <div className="p-2 lg:w-1/5 sm:w-1/3   group mx-auto w-[80%]">
        <div className="h-full flex items-center bg-gray-100   p-3 rounded-lg">
          <img alt="team" className="w-12 h-12 object-cover object-center flex-shrink-0 group-hover:-mt-2 duration-300 mr-4" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Best prices & offers</h2>
            <p className="text-gray-400 text-xs">Orders $50 or more</p>
          </div>
        </div>
      </div>


      <div className="p-2 lg:w-1/5 sm:w-1/3 group mx-auto w-[80%]">
        <div className="h-full flex items-center bg-gray-100   p-3 rounded-lg">
          <img alt="team" className="w-12 h-12 object-cover object-center flex-shrink-0 group-hover:-mt-2 duration-300  mr-4" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Free delivery</h2>
            <p className="text-gray-400 text-xs">24/7 amazing services</p>
          </div>
        </div>
      </div>


      <div className="p-2 lg:w-1/5 sm:w-1/3 group mx-auto w-[80%]">
        <div className="h-full flex items-center bg-gray-100  p-3 rounded-lg">
          <img alt="team" className="w-12 h-12 object-cover object-center flex-shrink-0  group-hover:-mt-2 duration-300 mr-4" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Great daily deal</h2>
            <p className="text-gray-500 text-xs">When you sign up</p>
          </div>
        </div>
      </div>


      <div className="p-2 lg:w-1/5 sm:w-1/3  group mx-auto w-[80%]">
        <div className="h-full flex items-center bg-gray-100   p-3 rounded-lg">
          <img alt="team" className="w-12 h-12 object-cover object-center flex-shrink-0 group-hover:-mt-2 duration-300  mr-4" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Wide assortment</h2>
            <p className="text-gray-500 text-xs">Mega Discounts</p>
          </div>
        </div>
      </div>


      <div className="p-2 lg:w-1/5 sm:w-1/3  group mx-auto w-[80%]">
        <div className="h-full flex items-center bg-gray-100   p-3 rounded-lg">
          <img alt="team" className="w-12 h-12  object-cover object-center flex-shrink-0 group-hover:-mt-2 duration-300 mr-4" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Easy returns</h2>
            <p className="text-gray-500 text-xs">Within 30 days</p>
          </div>
        </div>
      </div>

    



    </div>
  </div>
</section>

</div>







           </>
  )
}

export default StayHome
