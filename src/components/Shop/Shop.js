import React from "react";
import fakeData from "../../fakeData/index.js";
import { Products } from "./../Products/Products";
import { Cart } from "./../Cart/Cart";
import { useState, useEffect } from "react";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/DatabaseManager.js";

export const Shop = () => {
  const Products12 = fakeData.slice(0, 12);
  const [products, setProducts] = useState(Products12);
  const [cart, setCart] = useState([]);
  const [cartPopup, setCartPopup] = useState(false);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productId = Object.keys(savedCart);
    const cartProducts = productId.map((pId) => {
      const product = fakeData.find((pd) => pd.id === pId);
      product.quantity = savedCart[pId];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const handleAddProduct = (product) => {
    const productId = product.id;
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
      newCart = [...othersProduct, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.id, quantityCount);
  };

  // Cart Popup Handling
  const handleCartPopup = () => {
    setCartPopup(true);
  };
  // Close cart popup
  const closeCartPopup = () => {
    setCartPopup(false);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {products.map((pd) => (
            <Products
              key={pd.id}
              Products={pd}
              handleAddProduct={handleAddProduct}
            ></Products>
          ))}
          {
            <Cart
              Cart={cart}
              handleCartPopup={handleCartPopup}
              closeCartPopup={closeCartPopup}
              cartPopup={cartPopup}
            ></Cart>
          }
        </div>
      </div>
    </div>
  );
};
