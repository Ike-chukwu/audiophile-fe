import React from "react";
import HeadphonesHeader from "../HeadphonesHeader/HeadphonesHeader";
import BlackHeadphones from "../BlackHeadphones/BlackHeadphones";
import Template2 from "../Template2/Template2";
import wD from "../../assets/images/shared/desktop/image-xx59-headphones.jpg";
import wT from "../../assets/images/shared/tablet/image-xx59-headphones.jpg";
import wM from "../../assets/images/shared/mobile/image-xx59-headphones.jpg";
import bHeadphonesD from "../../assets/images/shared/desktop/image-xx99-mark-two-headphones.jpg";
import bHeadphonesT from "../../assets/images/shared/tablet/image-xx99-mark-two-headphones.jpg";
import bHeadphonesM from "../../assets/images/shared/mobile/image-xx99-mark-two-headphones.jpg";
import gHeadphonesD from "../../assets/images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import gHeadphonesT from "../../assets/images/shared/tablet/image-xx99-mark-one-headphones.jpg";
import gHeadphonesM from "../../assets/images/shared/mobile/image-xx99-mark-one-headphones.jpg";
import Goods from "../Goods/Goods";
import AudioGear from "../AudioGear/AudioGear";
import data from "../data.json";
import AnimatePage from "../AnimatePage/AnimatePage";

const HeadphonesPage = () => {
  return (
    <AnimatePage>
      <div className="used">
        <HeadphonesHeader content="HEADPHONES" />
        {data.map((d, index) => {
          if (index == 0) {
            return (
              <BlackHeadphones
                dImg={bHeadphonesD}
                tImg={bHeadphonesT}
                mImg={bHeadphonesM}
                bBreak="XX99 MARK II"
                aBreak="HEADPHONES"
                text=" The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound."
                identification={d.id}
                category={d.category}
              />
            );
          }

          if (index == 4) {
            return (
              <Template2
                dImg={wD}
                tImg={wT}
                mImg={wM}
                identification={d.id}
                category={d.category}
                bBreak={d.name}
                // bBreak="XX59"
                // aBreak="HEADPHONES"
                text=" Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move."
              />
            );
          }

          if (index == 5) {
            return (
              <Template2
                dImg={gHeadphonesD}
                tImg={gHeadphonesT}
                mImg={gHeadphonesM}
                identification={d.id}
                category={d.category}
                bBreak="XX99 MARK I"
                aBreak="HEADPHONES"
                text=" As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
              />
            );
          }
        })}
        {/* <BlackHeadphones
        dImg={bHeadphonesD}
        tImg={bHeadphonesT}
        mImg={bHeadphonesM}
        bBreak="XX99 MARK II"
        aBreak="HEADPHONES"
        text=" The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound."
      /> */}
        {/* <Template2
        dImg={wD}
        tImg={wT}
        mImg={wM}
        bBreak="XX59"
        aBreak="HEADPHONES"
        text=" Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move."
      /> */}
        {/* <Template2
        dImg={gHeadphonesD}
        tImg={gHeadphonesT}
        mImg={gHeadphonesM}
        bBreak="XX99 MARK I"
        aBreak="HEADPHONES"
        text=" As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
      /> */}
        <Goods />
        <AudioGear />
      </div>
    </AnimatePage>
  );
};

export default HeadphonesPage;
