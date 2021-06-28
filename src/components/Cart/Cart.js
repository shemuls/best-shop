import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { OrderSummury } from "../OrderSummury/OrderSummury.js";

export const Cart = (props) => {
  const cart = props.Cart;
  const totalQuantity = cart.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.quantity;
  }, 0);

  return (
    <div>
      {props.cartPopup ? (
        <div
          onClick={props.closeCartPopup}
          className="cartCalculator shadow-sm"
        >
          <p className="m-0">
            <FontAwesomeIcon icon={faShoppingCart} />{" "}
            <span>{totalQuantity}</span>
          </p>
        </div>
      ) : (
        <div
          onClick={props.handleCartPopup}
          className="cartCalculator shadow-sm"
        >
          <p className="m-0">
            <FontAwesomeIcon icon={faShoppingCart} />{" "}
            <span>{totalQuantity}</span>
          </p>
        </div>
      )}
      {props.cartPopup ? (
        <div className="cartCalculatorPopup shadow">
          <OrderSummury CartProducts={cart}>
            <a
              className="btn btn-primary btn-sm float-right"
              href="/cart-review"
            >
              View Cart
            </a>
          </OrderSummury>

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
