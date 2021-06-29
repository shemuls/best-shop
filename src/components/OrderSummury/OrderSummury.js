import React from "react";
import "./OrderSummury.css";

export const OrderSummury = (props) => {
  const cart = props.CartProducts;
  const totalPrice = cart.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.price * currentVal.quantity;
  }, 0);
  const totalQuantity = cart.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.quantity;
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
    <div className="order-summury">
      <h6>Order Summary</h6>
      <ul>
        <li>Ordered item: {cart.length}</li>
        <li>Total quantity: {totalQuantity}</li>
        <li>Total price: $ {totalPrice}</li>
        <li>Shipping Cost: $ {shippingCost}</li>
        <li>
          <strong>Grand Total: $ {totalPrice + shippingCost}</strong>
        </li>
        <hr />
      </ul>
      {props.children}
    </div>
  );
};
