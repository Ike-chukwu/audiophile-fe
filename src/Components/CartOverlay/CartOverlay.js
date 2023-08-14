import React from "react";
import "./CartOverlay.css";
import { Link } from "react-router-dom";
import AnimatePage from "../AnimatePage/AnimatePage";

const CartOverlay = (props) => {
  const totalPrice = props.cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <AnimatePage>
      <div className="lightbox" onClick={() => props.c_func()}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <div className="deetailsss">
            <div className="first-t">
              <span className="a-title">Cart </span>
              <span>({props.cartItems.length})</span>
            </div>
            <div className="s-aspect">
              {props.cartItems.length !== 0 && (
                <p onClick={() => props.clearCartFunc()}> Remove all</p>
              )}
            </div>
          </div>
          <div className="deetailz">
            {props.cartItems.length == 0 && <p>Your cart is empty.</p>}
          </div>
          <div className="purchased">
            <div className="p-deets">
              {props.cartItems.map((item, index) => {
                const {
                  name,
                  image: { mobile, tabletr, desktop },
                  quantity,
                  price,
                  slug,
                } = item;
                return (
                  <div className="purchased-item">
                    {/* <p>{name}</p> */}
                    <img src={desktop} alt={name} />
                    <div className="cart-items-price">
                      <p className="active-product">{slug}</p>
                      <p className="price-tag">${+price}</p>
                    </div>
                    <div className="count-btns">
                      <button
                        className="add-plus"
                        onClick={() => props.increaseFromCart(item)}
                      >
                        +
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="subtract"
                        onClick={() => props.decreaseFromCart(item)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            {props.cartItems.length !== 0 && (
              <div className="total">
                <p className="total-title">Total:</p>
                <p className="t-cost">${totalPrice}</p>
              </div>
            )}
            {props.cartItems.length !== 0 && (
              <Link
                to={"/checkoutpage"}
                onClick={() => props.status_func(false)}
              >
                <span className="checkout-btn-active">Checkout</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default CartOverlay;
