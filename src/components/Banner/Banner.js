import React from "react";
import "./Banner.css";
import heroImage from "../../assets/images/slide2.jpg";

export const Banner = () => {
  return (
    <div className="heroArea" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>
              Best <span className="text-primary">Shop</span>
            </h1>

            <h4>welcome to eCommerce world !</h4>
            <br />
            <br />
            <a className="btn btn-primary btn-lg" href="#products">
              OUR PRODUCTS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
