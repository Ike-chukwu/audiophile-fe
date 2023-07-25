import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Goods from "../Goods/Goods";
import GoodsDisplay from "../GoodsDisplay/GoodsDisplay";
import AudioGear from "../AudioGear/AudioGear";
import data from "../data.json";
import AnimatePage from "../AnimatePage/AnimatePage";

const Homepage = () => {
  return (
    <AnimatePage>
      <div>
        <HeroSection identificaton={data[0].id} />
        <Goods />
        <GoodsDisplay />
        <AudioGear />
      </div>
    </AnimatePage>
  );
};

export default Homepage;
