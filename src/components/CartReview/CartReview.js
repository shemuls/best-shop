import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/DatabaseManager.js";
import fakeData from "./../../fakeData/index";

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

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {cart.map((cartProduct) => (
              <h5>{cartProduct.productName}</h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
