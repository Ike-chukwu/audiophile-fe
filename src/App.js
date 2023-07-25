import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/pages/Homepage";
import Footer from "./Components/Footer/Footer";
import HeadphonesPage from "./Components/pages/HeadphonesPage";
import Speaker from "./Components/pages/Speaker";
import WirelessEarphonepage from "./Components/pages/WirelessEarphonepage";
import PersonalProductRender from "./Components/PersonalProductRender/PersonalProductRender";
import Checkoutpage from "./Components/pages/Checkoutpage";
import data from "./Components/data.json";
import CartOverlay from "./Components/CartOverlay/CartOverlay";
import Success from "./Components/Success/Success";
import Cancel from "./Components/Cancel/Cancel";
import { AnimatePresence } from "framer-motion";

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cartItems")) || [];

function App() {
  const [cartState, setCartActive] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = cartState ? "hidden" : "auto";
    }
  }, [cartState]);

  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);
  const [itemCount, setItemCount] = useState(1);

  console.log(cartItems);
  //saving items that were added to cart on last load
  useEffect(() => {
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // addtocartBtn functionality
  const handleAddProduct = (product, amount, setAmount) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, quantity: amount } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: amount }]);
    }
    setAmount(1);
  };

  //increase product count in cart fnctionality
  const increamentProduct = (product) => {
    let productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      productExist = { ...productExist, quantity: productExist.quantity + 1 };
    }
  };

  // removefromCart functionality
  const handlRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  //special functions in cart
  const increaseFromCart = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...product, quantity: product.quantity + 1 }
          : item
      )
    );
  };

  const decreaseFromCart = (product) => {
    if (product.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...product, quantity: product.quantity - 1 }
            : item
        )
      );
    }
  };

  //calculates total number of goods
  const totalGoodsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  //clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // checkout form details
  const [values, setValues] = useState({
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

  const location = useLocation();

  return (
    <div className="">
      <Navbar
        cState={cartState}
        c_func={setCartActive}
        totalGoodsCount={totalGoodsCount}
      />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Homepage />} />

          <Route path="/headphones" element={<HeadphonesPage />} />

          <Route path="/speakers" element={<Speaker />} />

          <Route path="/earphones" element={<WirelessEarphonepage />} />

          <Route
            path="/product/:productId"
            element={
              <PersonalProductRender
                handleAddProductFunc={handleAddProduct}
                handleRemoveProductFunc={handlRemoveProduct}
                cartItems={cartItems}
                itemCounter={increamentProduct}
                itemAmount={itemCount}
              />
            }
          />

          <Route
            path="/checkoutpage"
            element={
              <Checkoutpage
                cartItems={cartItems}
                values={values}
                setValues={setValues}
              />
            }
          />

          <Route path="/success" element={<Success cartItems={cartItems} />} />

          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </AnimatePresence>
      {cartState ? (
        <CartOverlay
          status={cartState}
          status_func={setCartActive}
          cartItems={cartItems}
          handleAddProductFunc={handleAddProduct}
          handleRemoveProductFunc={handlRemoveProduct}
          clearCartFunc={clearCart}
          increaseFromCart={increaseFromCart}
          decreaseFromCart={decreaseFromCart}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
