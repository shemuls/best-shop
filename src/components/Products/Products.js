import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Products = (props) => {
  const { productImg, productName, price, category } = props.Products;

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow">
        <img className="card-img-top" src={productImg} alt="" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p className="card-text">
            <strong>${price}</strong>
          </p>
          <button
            onClick={() => props.handleAddProduct(props.Products)}
            className="btn btn-primary float-right"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span> Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
