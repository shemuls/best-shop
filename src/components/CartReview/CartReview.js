import React, { useEffect, useState } from "react";
import {
  addToDatabaseCart,
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/DatabaseManager.js";
import fakeData from "./../../fakeData/index";

import "./CartReview.css";
import { OrderItem } from "./../OrderItem/OrderItem";
import { OrderSummury } from "./../OrderSummury/OrderSummury";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const CartReview = () => {
  const [cart, setCart] = useState([]);
  const [placeOrder, setPlaceOrder] = useState(false);

  useEffect(() => {
    const allProducts = fakeData;
    const savedCart = getDatabaseCart();
    const productId = Object.keys(savedCart);
    const cartProducts = productId.map((pId) => {
      const product = allProducts.find((pd) => pd.id === pId);
      product.quantity = savedCart[pId];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const removeCartItem = (id) => {
    const currentCart = cart;
    const updatedCart = currentCart.filter(
      (cartProuct) => cartProuct.id !== id
    );
    removeFromDatabaseCart(id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const productId = id;
    const currentCart = cart;
    const sameProduct = currentCart.find(
      (singleProduct) => singleProduct.id === productId
    );
    let quantityCount = 1;
    let newCart;
    if (sameProduct) {
      quantityCount = sameProduct.quantity + 1;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.id !== productId
      );
      newCart = [sameProduct, ...othersProduct];
      setCart(newCart);
      addToDatabaseCart(id, quantityCount);
    }
  };
  const decreaseQuantity = (id) => {
    const productId = id;
    const currentCart = cart;
    const sameProduct = currentCart.find(
      (singleProduct) => singleProduct.id === productId
    );
    let quantityCount = 1;
    let newCart;
    if (sameProduct && sameProduct.quantity > 0) {
      quantityCount = sameProduct.quantity + -1;
      sameProduct.quantity = quantityCount;
      const othersProduct = currentCart.filter(
        (singleProduct) => singleProduct.id !== productId
      );
      newCart = [sameProduct, ...othersProduct];
      setCart(newCart);
      addToDatabaseCart(id, quantityCount);
    }
  };

  const handleOrderPlaceBtn = () => {
    setCart([]);
    setPlaceOrder(true);
    processOrder();
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
                key={cartProucts.id + Math.random()}
                CartProducts={cartProucts}
                RemoveCartItem={removeCartItem}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              ></OrderItem>
            ))}
            {placeOrder && (
              <p className="alert alert-success">
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faCheckCircle}
                ></FontAwesomeIcon>
                Order placed successfull !
              </p>
            )}
          </div>
          <div className="col-md-4">
            <div className="row bg-white p-3 ">
              <div className="col">
                <OrderSummury CartProducts={cart}>
                  <button
                    onClick={handleOrderPlaceBtn}
                    className="btn btn-success float-right"
                  >
                    Place Order
                  </button>
                </OrderSummury>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
