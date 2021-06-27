import React from "react";
import { useParams } from "react-router";
import fakeData from "./../../fakeData/index";
import { Products } from "./../Products/Products";
import "./SingleProduct.css";

export const SingleProduct = (props) => {
  let { id } = useParams();
  const products = fakeData;
  const cartProduct = products.find((pd) => pd.id === id);
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row py-5">
          <Products Products={cartProduct} SingleProduct={true}></Products>
        </div>
      </div>
    </div>
  );
};
