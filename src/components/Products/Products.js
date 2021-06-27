import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Products = (props) => {
  const { id, productImg, productName, price, category } = props.Products;
  let SingleProductPage = false;
  if (props.SingleProduct) {
    SingleProductPage = true;
  }
  let col = "col-md-4";
  if (SingleProductPage === true) {
    col = "col-md-12";
  }
  return (
    <div className={`${col} mb-4`}>
      <div className="card shadow">
        {SingleProductPage === true ? (
          <img
            className="card-img-top singleProductPhoto"
            src={productImg}
            alt=""
          />
        ) : (
          <img className="card-img-top" src={productImg} alt="" />
        )}

        <div className="card-body">
          <Link to={"/product/" + id}>
            <h5 className="card-title">{productName}</h5>
          </Link>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p className="card-text">
            <strong>${price}</strong>
          </p>
          {SingleProductPage === false && (
            <button
              onClick={() => props.handleAddProduct(props.Products)}
              className="btn btn-primary float-right"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> Add to cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
