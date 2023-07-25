import React from "react";
import "./OrangeSpeaker.css";
import SpeakerImg from "../../../assets/images/home/desktop/image-speaker-zx9.png";
import SpeakerImgT from "../../../assets/images/home/tablet/image-speaker-zx9.png";
import SpeakerImgM from "../../../assets/images/home/mobile/image-speaker-zx9.png";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const OrangeSpeaker = (props) => {

  return (
    <div className="or-speaker">
      <div className="image">
        <picture>
          <source srcSet={SpeakerImgM} media="(max-width:750px)" />
          <source srcSet={SpeakerImgT} media="(max-width:1120px)" />
          <img src={SpeakerImg} alt="" />
        </picture>
      </div>
      <div className="right">
        <h1>
          ZX9 <br /> SPEAKER
        </h1>
        <p>
          Upgrade to premium speakers that are <br /> phenomenally built to
          deliver truly remarkable <br /> sound.
        </p>
        <Link to={`/product/${props.identification}`}> 
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default OrangeSpeaker;
