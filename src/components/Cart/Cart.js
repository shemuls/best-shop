import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { OrderSummury } from "../OrderSummury/OrderSummury.js";

export const Cart = (props) => {
  const cart = props.Cart;
  const totalPrice = cart.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.price;
  }, 0);

  let shippingCost = 0;
  if (totalPrice >= 50) {
    shippingCost = 10;
  }
  if (totalPrice >= 150) {
    shippingCost = 50;
  }
  if (totalPrice >= 500) {
    shippingCost = 100;
  }
  if (totalPrice > 1000) {
    shippingCost = 150;
  }
  if (totalPrice > 5000) {
    shippingCost = 250;
  }

  return (
    <div>
      {props.cartPopup ? (
        <div
          onClick={props.closeCartPopup}
          className="cartCalculator shadow-sm"
        >
          <p className="m-0">
            <FontAwesomeIcon icon={faShoppingCart} /> <span>{cart.length}</span>
          </p>
        </div>
      ) : (
        <div
          onClick={props.handleCartPopup}
          className="cartCalculator shadow-sm"
        >
          <p className="m-0">
            <FontAwesomeIcon icon={faShoppingCart} /> <span>{cart.length}</span>
          </p>
        </div>
      )}
      {props.cartPopup ? (
        <div className="cartCalculatorPopup shadow">
          <OrderSummury CartProducts={cart}></OrderSummury>
          <a className="btn btn-primary btn-sm float-right" href="/cart-review">
            View Cart
          </a>

          <button
            onClick={props.closeCartPopup}
            className="btn btn-light btn-sm text-danger"
          >
            &times;
          </button>
        </div>
      ) : null}
    </div>
  );
};
