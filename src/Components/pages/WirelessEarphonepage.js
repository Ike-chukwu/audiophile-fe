import React from "react";
import HeadphonesHeader from "../HeadphonesHeader/HeadphonesHeader";
import BlackHeadphones from "../BlackHeadphones/BlackHeadphones";
import eD from "../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import eM from "../../assets/images/shared/mobile/image-category-thumbnail-earphones.png";
import Goods from "../Goods/Goods";
import AudioGear from "../AudioGear/AudioGear";
import data from "../data.json";
import AnimatePage from "../AnimatePage/AnimatePage";

const WirelessEarphonepage = () => {
  return (
    <AnimatePage>
      <div className="used">
        <HeadphonesHeader content="EARPHONES" />
        {data.map((d, index) => {
          if (index == 3) {
            return (
              <BlackHeadphones
                dImg={eD}
                tImg={eD}
                mImg={eM}
                bBreak="YX1 WIRELESS"
                aBreak="EARPHONES"
                text=" Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
                identification={d.id}
                category={d.category}
              />
            );
          }
        })}
        <Goods />
        <AudioGear />
      </div>
    </AnimatePage>
  );
};

export default WirelessEarphonepage;
