import React from "react";
import Img from "../../assets/images/slide2.jpg";
import fakeData from "../../fakeData/index.js";
import { Products } from "./../Products/Products";

export const Shop = () => {
  const products = fakeData.slice(0, 12);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {products.map((pd) => (
            <Products key={pd.id} Products={pd}></Products>
          ))}
        </div>
      </div>
    </div>
  );
};
