import React from "react";
import HeadphonesHeader from "../HeadphonesHeader/HeadphonesHeader";
import BlackHeadphones from "../BlackHeadphones/BlackHeadphones";
import Template2 from "../Template2/Template2";
import sD from "../../assets/images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import sT from "../../assets/images/shared/tablet/image-zx9-speaker.jpg";
import sM from "../../assets/images/shared/mobile/image-zx9-speaker.jpg";
import S2D from "../../assets/images/shared/desktop/image-zx7-speaker.jpg";
import S2T from "../../assets/images/shared/tablet/image-zx7-speaker.jpg";
import S2M from "../../assets/images/shared/mobile/image-zx7-speaker.jpg";
import Goods from "../Goods/Goods";
import AudioGear from "../AudioGear/AudioGear";
import data from "../data.json";
import AnimatePage from "../AnimatePage/AnimatePage";

const Speaker = () => {
  return (
    <AnimatePage>
      <div className="used">
        <HeadphonesHeader content="SPEAKERS" />
        {data.map((d, index) => {
          if (index == 1) {
            return (
              <BlackHeadphones
                dImg={sD}
                tImg={sT}
                mImg={sM}
                bBreak="ZX9"
                aBreak="SPEAKER"
                text=" Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
                identification={d.id}
                category={d.category}
              />
            );
          }
          if (index == 2) {
            return (
              <BlackHeadphones
                dImg={S2D}
                tImg={S2T}
                mImg={S2M}
                bBreak="ZX7"
                aBreak="SPEAKER"
                text=" Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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

export default Speaker;
