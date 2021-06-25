import React from "react";
import Img from "../../assets/images/slide2.jpg";
import fakeData from "../../fakeData/index.js";

export const Shop = () => {
  const products = fakeData.slice(0, 12);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {products.map((pd) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={pd.productImg} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{pd.productName}</h5>
                  <p>
                    <strong>Category:</strong> {pd.category}
                  </p>
                  <p className="card-text">
                    <strong>${pd.price}</strong>
                  </p>
                  <a href="#a" className="btn btn-primary float-right">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
