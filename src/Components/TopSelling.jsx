import React,{useState} from "react";
import Common from "./Common/Common";
import { TopSellingCard } from "../LocalDataBase/Index";



function TopSelling() {

  const [card,setcard]=useState({

    card1:[TopSellingCard.Topse],
    card2:[TopSellingCard.treding],
    card3:[TopSellingCard.recently],
    card4:[TopSellingCard.toprate]

  })




  return (
    <>
      <div className="mx-2 mt-12">
       

        <section className="text-gray-600 body-font" id="FeaturedCategories">
  <div className="container px-5 py-2 mx-auto">
    
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className=" text-gray-900 mb-1 text-[22px] text-left">Top Selling</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>

        <nav className="flex flex-col text-left  items-center -mb-1 space-y-2.5">
          {
            card.card1[0].map((v,i)=>{
return(
  <Common title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className=" text-gray-900 mb-1 text-[22px] text-left">Trending Products</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>   
             <nav className="flex flex-col sm:items-start text-left  items-center -mb-1 space-y-2.5">
             {
            card.card2[0].map((v,i)=>{
return(
  <Common title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className=" text-gray-900 mb-1 text-[22px] text-left">Recently added</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>   
             <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
             {
            card.card3[0].map((v,i)=>{
return(
  <Common title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className=" text-gray-900 mb-1 text-[22px] text-left">Top Rated</h2>
        <div className="w-[25%] h-[2px] bg-green-200"></div>    
            <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
            {
            card.card4[0].map((v,i)=>{
return(
  <Common title={v.title} image={v.image} price1={v.price1} price2={v.price2}/>

) })}
        </nav>
      </div>
    </div>
  </div>
</section>







      </div>
    </>
  );
}

export default TopSelling;
