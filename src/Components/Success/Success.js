import React from "react";
import "./Success.css";
import { Link } from "react-router-dom";
import AnimatePage from "../AnimatePage/AnimatePage";

const Success = (props) => {

  const totalPrice = props.cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <AnimatePage>
      <div className="conf-cover">
        <div className="confirmation">
          <i className="fas fa-check"></i>
          <h2>thank you for your purchase</h2>
          <div className="blocks">
            <div className="s-block">
              <p>grand total</p>
              <p> ${`${totalPrice}`}</p>
            </div>
          </div>
          <Link to="/">
            <a>back to home</a>
          </Link>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Success;
