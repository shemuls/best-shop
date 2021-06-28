import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/DatabaseManager.js";
import fakeData from "./../../fakeData/index";

import "./CartReview.css";
import { OrderItem } from "./../OrderItem/OrderItem";
import { OrderSummury } from "./../OrderSummury/OrderSummury";

export const CartReview = () => {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    const allProducts = fakeData;
    const savedCart = getDatabaseCart();
    const productId = Object.keys(savedCart);
    const cartProducts = productId.map((pId) => {
      const product = allProducts.find((pd) => pd.id === pId);
      product.quantity = savedCart[pId];
      return product;
    });
    setcart(cartProducts);
  }, []);

  const RemoveCartItem = (id) => {
    const currentCart = cart;
    const updatedCart = currentCart.filter(
      (cartProuct) => cartProuct.id !== id
    );
    removeFromDatabaseCart(id);
    setcart(updatedCart);
  };

  return (
    <div className="cart-review bg-light p-5">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Shopping Cart</h5>
          </div>
          <div className="col-md-6">
            <h5>Order Item: {cart.length}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 order-item ">
            {cart.map((cartProucts) => (
              <OrderItem
                key={cartProucts.id}
                CartProducts={cartProucts}
                RemoveCartItem={RemoveCartItem}
              ></OrderItem>
            ))}
          </div>
          <div className="col-md-4">
            <div className="row bg-white p-3 ">
              <div className="col">
                <OrderSummury CartProducts={cart}></OrderSummury>
                <button className="btn btn-success float-right">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
