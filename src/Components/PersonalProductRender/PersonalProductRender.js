import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import datam from "../data.json";
import Button from "../Button/Button";
import desktops from "../../assets/images/shared/desktop/image-zx9-speaker.jpg";
import desktopM from "../../assets/images/shared/mobile/image-zx9-speaker.jpg";
import desktopT from "../../assets/images/shared/tablet/image-zx9-speaker.jpg";
import "./PersonalProductRender.css";
import Goods from "../Goods/Goods";
import AudioGear from "../AudioGear/AudioGear";
import { useParams } from "react-router-dom";
import z1 from "../../assets/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import data from "../data.json";
import LinkedBoxes from "../LinkedBoxes/LinkedBoxes";
import Success from "../Success/Success";
import AnimatePage from "../AnimatePage/AnimatePage";

const PersonalProductRender = (props) => {
  const { productId } = useParams();
  const atualData = datam[productId];
  console.log(atualData);
  const quantityOfInterest = props.cartItems.find(
    (item) => item.id === atualData.id
  );
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    if (amount <= 1) {
      return;
    }
    setAmount(amount - 1);
  };

  const {
    id,
    name,
    image: { mobile, tablet, desktop },
    price,
    description,
    features,
    features2,
    includes,
    gallery,
    others,
    quantity,
  } = atualData;

  const { mobile: mo, tabelet: ta, desktop: de } = gallery[0];
  const { mobile: mob, tabelet: tab, desktop: des } = gallery[1];
  const { mobile: mo3, tabelet: ta3, desktop: de3 } = gallery[2];


  //go to previous page
  const navigate = useNavigate();


  return (
    <AnimatePage>
      <div>
        <section className="personal">
          <span className="back" onClick={() => navigate(-1)}>
            Go Back
          </span>
          <div className="product-view">
            <div className="img-aspect">
              <picture>
                <source srcSet={mobile} media="(max-width:980px)" />
                <source srcSet={tablet} media="(max-width:1100px)" />
                <img src={desktop} alt="" />
              </picture>
            </div>

            <div className="desc">
              <div className="first">
                <span className="new">NEW PRODUCT</span>
                <h3 className="title">{name}</h3>
              </div>
              <div className="second">
                <p className="long-txt">{description}</p>
                <p className="price">{`$${price}`}</p>
                <div className="amount-calc">
                  <div className="counter">
                    <i
                      className="fas fa-subtract"
                      onClick={() => decreaseAmount()}
                    ></i>
                    <span>{amount}</span>
                    <i
                      className="fas fa-plus"
                      onClick={() => increaseAmount()}
                    ></i>
                  </div>
                  <p
                    href=""
                    className="carts"
                    onClick={() =>
                      props.handleAddProductFunc(atualData, amount, setAmount)
                    }
                  >
                    ADD TO CART
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="f-left">
            <h2>Features</h2>
            <div className="content">
              <p>{features}</p>
              <p className="second">{features2}</p>
            </div>
          </div>
          <div className="f-right">
            <h2>IN THE BOX</h2>
            <div className="span-pack">
              {includes.map((item) => {
                return (
                  <div className="p-pack">
                    <span className="span-colored">{`${item.quantity}x`}</span>
                    <p>{item.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pictures">
          <div className="pic-pack">
            <div className="imgs-stack">
              <picture>
                <source srcSet={mo3} media="(max-width:950px)" />
                <source srcSet={ta3} media="(max-width:1120px)" />
                <img src={de3} alt="" />
              </picture>
              <picture>
                <source srcSet={mob} media="(max-width:950px)" />
                <source srcSet={tab} media="(max-width:1120px)" />
                <img src={des} alt="" />
              </picture>
            </div>
            <div className="lg-img">
              <picture>
                <source srcSet={mo} media="(max-width:950px)" />
                <source srcSet={ta} media="(max-width:1120px)" />
                <img src={de} alt="" />
              </picture>
            </div>
          </div>
        </section>

        <section>
          <h3 className="header-text">YOU MAY ALSO LIKE</h3>
          <div className="what-you-like">
            <LinkedBoxes atualData={atualData} />
            {/* <div className="box">
            <picture>
              <source srcSet={mobiles} media="(max-width:950px)" />
              <source srcSet={tablets} media="(max-width:1120px)" />
              <img src={desktops} alt="" />
            </picture>
            <h3>{name1}</h3>
            <Button />
          </div>
          <div className="box">
            <picture>
              <source srcSet={moo2} media="(max-width:950px)" />
              <source srcSet={too2} media="(max-width:1120px)" />
              <img src={doo2} alt="" />
            </picture>
            <h3>{name2}</h3>
            <Button />
          </div>
          <div className="box">
            <picture>
              <source srcSet={moo3} media="(max-width:950px)" />
              <source srcSet={too3} media="(max-width:1120px)" />
              <img src={doo3} alt="" />
            </picture>
            <h3>{name3}</h3>
            <Button />
          </div> */}
          </div>
        </section>

        <Goods />

        <AudioGear />
      </div>
    </AnimatePage>
  );
};

export default PersonalProductRender;
