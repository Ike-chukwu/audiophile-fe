import React from "react";
import imgD from "../../assets/images/shared/desktop/image-best-gear.jpg";
import imgT from "../../assets/images/shared/tablet/image-best-gear.jpg";
import imgM from "../../assets/images/shared/mobile/image-best-gear.jpg";
import './AudioGear.css'



const AudioGear = () => {
  return (
    <section className="a-gear">
      <div className="a-left">
        <h1>
          BRINGING YOU  THE <span className="btw"> BEST </span>AUDIO GEAR
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="right">
        <picture>
          <source srcSet={imgM} media="(max-width:750px)" />
          <source srcSet={imgT} media="(max-width:1130px)" />
          <img src={imgD} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default AudioGear;
