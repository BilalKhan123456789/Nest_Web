import React from "react";
import { Routes, Route } from "react-router-dom";
import ImgSlider from "../Components/Slider/HeroSec";
import Details from "../Components/Details_Page/Details";
import VendorList from "../Components/VendorList";
import Whislist from "../Components/Whislist";
import Snacks from "../Components/SnacksCards/Snacks";
import About from "../Components/About_Page/About";
import LeftSideCard from "../Components/SnacksCards/LeftSideCard";
import ShopList from "../Components/ShopList";
import Signup from "../Components/Login/Signup";
import Login from "../Components/Login/Login";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ImgSlider />} />
        <Route path="/details" element={<Details />} />
        <Route path="/vendor" element={<VendorList />} />
        <Route path="/Whislist" element={<Whislist />} />
        <Route path="/Snack" element={<Snacks />} />
        <Route path="/About" element={<About />} />
        <Route path="/LeftSide" element={<LeftSideCard />} />
        <Route path="/ShopList" element={<ShopList />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Navigation;
