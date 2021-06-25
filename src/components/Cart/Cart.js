import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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

  console.log(shippingCost);
  return (
    <div>
      <div onClick={props.handleCartPopup} className="cartCalculator shadow-sm">
        <p className="m-0">
          <FontAwesomeIcon icon={faShoppingCart} /> <span>{cart.length}</span>
        </p>
      </div>
      {props.cartPopup ? (
        <div className="cartCalculatorPopup shadow">
          <h6>
            <strong>Order Summary</strong>
          </h6>
          <ul>
            <li>Ordered item: {cart.length}</li>
            <li>Total price: {totalPrice}</li>
            <li>Shipping Cost: {shippingCost}</li>
            <li>
              <strong>Grand Total: {totalPrice + shippingCost}</strong>
            </li>
            <hr />
          </ul>
          <a className="btn btn-primary btn-sm float-right" href="/view-cart">
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
