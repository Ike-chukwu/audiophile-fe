import React from "react";
import "./GreySpeaker.css";
import Button from "../../Button/Button";
import secondSpeakerImg from "../../../assets/images/home/desktop/image-speaker-zx7.jpg";
import secondSpeakerImgT from "../../../assets/images/home/tablet/image-speaker-zx7.jpg";
import secondSpeakerImgM from "../../../assets/images/home/mobile/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";

const GreySpeaker = (props) => {
  const id ='1'
  return (
    <div className="grey-speaker ">
      <div className="left">
        <h3>ZX7 SPEAKER</h3>
        <Link to={`/product/${props.identification}`}> 
          <Button />
        </Link>
      </div>
      <div className="right-h">
        <picture>
          <source srcSet={secondSpeakerImgM} media="(max-width:750px)" />
          <source srcSet={secondSpeakerImgT} media="(max-width:1120px)" />
          <img src={secondSpeakerImg} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default GreySpeaker;
