import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const OrderItem = (props) => {
  const { productName, productImg, price, quantity } = props.CartProduct;
  return (
    <div className="row p-3 mb-3 shadow rounded bg-white">
      <div className="col-md-6">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon className="text-danger" icon={faTrash} />
          <img className="img-thumbnail ml-2" src={productImg} alt="" />
          <div className="ml-2">
            <p>
              <strong>{productName}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-between">
        <div className="qty d-flex align-items-center">
          <span>
            <strong>-</strong>
          </span>
          <input className="form-control mx-2 text-center" value={quantity} />
          <span>
            <strong>+</strong>
          </span>
        </div>
        <div className="price">
          <strong>${price * quantity}</strong>
        </div>
      </div>
    </div>
  );
};
