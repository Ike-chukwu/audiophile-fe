import React, { useState } from "react";
import "./Checkoutpage.css";
import AnimatePage from "../AnimatePage/AnimatePage";

const Checkoutpage = (props) => {
  const totalPrice = props.cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  let tax = Math.floor((20 / 100) * totalPrice);
  const {
    name,
    email,
    phoneNumber,
    address,
    zipCode,
    city,
    country,
    creditCard,
    cashOnD,
  } = props.values;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const isEmpty = Object.values(props.values).every((x) => !!x);

  const [btnState, setBtnState] = useState(false);

  const finalVerification = () => {
    const { creditCard, cashOnD } = props.values;
    if (
      (creditCard == true && cashOnD == false) ||
      (creditCard == false && cashOnD == true)
    ) {
      setBtnState(true);
    }
  };

  const setAlert = async () => {
    console.log(props.cartItems);
    await fetch("https://audiophile-server-1.onrender.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: props.cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });

    alert(
      `Hello ${name}! \nYour request has been received and will be processed shortly.\nPlease check your email for further details. `
    );
    props.setValues({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      creditCard: false,
      cashOnD: false,
    });
  };

  return (
    <AnimatePage>
      <section className="cart">
        <div className="checkout-side">
          <h3 className="titlez">Checkout</h3>
          <div className="aspects">
            <form className="billing">
              <span className="c-subtitle">Billing details</span>
              <div className="i-fields">
                <div className="side-side">
                  <div className="ind-input">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={(e) =>
                        props.setValues({
                          ...props.values,
                          name: e.target.value,
                        })
                      }
                      required
                      focused={focused.toString()}
                      value={name}
                    />
                    <span className="error-message">Invalid Name!</span>
                  </div>
                  <div className="ind-input">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      onChange={(e) =>
                        props.setValues({
                          ...props.values,
                          email: e.target.value,
                        })
                      }
                      required
                      focused={focused.toString()}
                      value={email}
                    />
                    <span className="error-message">
                      It should be a valid email address!
                    </span>
                  </div>
                </div>
              </div>
              <div className="ind-input">
                <p>Phone Number</p>
                <input
                  type="text"
                  placeholder="+234 90200..."
                  onChange={(e) =>
                    props.setValues({
                      ...props.values,
                      phoneNumber: e.target.value,
                    })
                  }
                  value={phoneNumber}
                  required
                  focused={focused.toString()}
                  pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                />
                <span className="error-message">
                  Phone Number is in the wrong format!
                </span>
              </div>
            </form>

            <div className="shipping-aspect">
              <span className="c-subtitle">Shipping info</span>
              <div className="extra">
                <div className="i-fields-1">
                  <div className="ind-input">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Am Delde 58"
                      onChange={(e) =>
                        props.setValues({
                          ...props.values,
                          address: e.target.value,
                        })
                      }
                      required
                      focused={focused.toString()}
                      value={address}
                    />
                    <span className="error-message">
                      Address should be at least 10 characters
                    </span>
                  </div>
                  <div className="ind-input">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      placeholder="10178"
                      onChange={(e) =>
                        props.setValues({
                          ...props.values,
                          zipCode: e.target.value,
                        })
                      }
                      required
                      focused={focused.toString()}
                      value={zipCode}
                    />
                    <span className="error-message">Zipcode is invalid</span>
                  </div>
                </div>
                <div className="i-fields-1">
                  <div className="ind-input">
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="Berlin"
                      onChange={(e) =>
                        props.setValues({
                          ...props.values,
                          city: e.target.value,
                        })
                      }
                      required
                      focused={focused.toString()}
                      value={city}
                    />
                    <span className="error-message">
                      This city does not exist!
                    </span>
                  </div>
                  <div className="ind-input">
                    <label>Country</label>
                    <input
                      type="text"
                      placeholder="Germany"
                      onChange={(e) =>
                        props.setValues({
                          ...props.values,
                          country: e.target.value,
                        })
                      }
                      required
                      focused={focused.toString()}
                      value={country}
                    />
                    <span className="error-message">
                      This country does not exist!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="payment-methods">
              <span className="c-subtitle">payment method</span>
              <div className="i-box-pack">
                <div className="checkers">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      props.setValues({
                        ...props.values,
                        creditCard: e.target.checked,
                      })
                    }
                  />
                  <span>Credit Card</span>
                </div>
                <div className="checkers">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      props.setValues({
                        ...props.values,
                        cashOnD: e.target.checked,
                      })
                    }
                  />
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="summary">
          <h3>Summary</h3>

          {props.cartItems.length !== 0 && (
            <div className="p-deets">
              {props.cartItems.map((item, index) => {
                const {
                  name,
                  image: { mobile, tablet, desktop },
                  quantity,
                  price,
                  slug,
                } = item;
                console.log(item.image.desktop);
                return (
                  <div className="purchased-item">
                    <img src={desktop} alt={name} />
                    <div className="cart-items-price">
                      <p className="active-product">{slug}</p>
                      <p className="price-tag">${+price}</p>
                    </div>
                    <div className="count-btns">
                      <span>X{quantity}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="remainder">
            <div className="three-pack">
              <div className="packk">
                <p className="heading">Total</p>
                <p className="price">$ {totalPrice}</p>
              </div>
              <div className="packk">
                <p className="heading">Shipping</p>
                <p className="price">$ 50</p>
              </div>
              <div className="packk">
                <p className="heading">VAT (INCLUDED)</p>
                <p className="price">$ {Math.floor((20 / 100) * totalPrice)}</p>
              </div>
            </div>

            <div className="packk">
              <p>GRAND TOTAL</p>
              <p className="price-colored">$ {tax + totalPrice + 50}</p>
            </div>

            <span
              className={
                name &&
                email &&
                phoneNumber &&
                address &&
                zipCode &&
                city &&
                country &&
                ((creditCard == true && cashOnD == false) ||
                  (creditCard == false && cashOnD == true))
                  ? "long ready"
                  : "long"
              }
              onClick={setAlert}
            >
              Continue & Pay
            </span>
          </div>
        </div>
      </section>
    </AnimatePage>
  );
};

export default Checkoutpage;
