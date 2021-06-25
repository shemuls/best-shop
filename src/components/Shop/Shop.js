import React from "react";
import fakeData from "../../fakeData/index.js";
import { Products } from "./../Products/Products";
import { Cart } from "./../Cart/Cart";
import { useState } from "react";

export const Shop = () => {
  const Products12 = fakeData.slice(0, 12);
  const [products, setProducts] = useState(Products12);
  const [cart, setCart] = useState([]);
  const [cartPopup, setCartPopup] = useState(false);

  const handleAddProduct = (product) => {
    const currentCart = cart;
    const newCart = [...currentCart, product];
    setCart(newCart);
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
