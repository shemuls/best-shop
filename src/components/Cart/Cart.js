import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { OrderSummury } from "../OrderSummury/OrderSummury.js";

export const Cart = (props) => {
  const cart = props.Cart;

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
