import React from "react";

export const Products = (props) => {
  const { productImg, productName, price, category } = props.Products;
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={productImg} alt="" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p className="card-text">
            <strong>${price}</strong>
          </p>
          <a href="#a" className="btn btn-primary float-right">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
