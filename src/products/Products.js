import React, { Component } from "react";
import "./Products.css";
import Icon from "./../assets/retail/group-7.svg";

class Products extends Component {
  render() {
    return (
      <div className="content">
        <div className="first-column">
          <img className="image-style" src={Icon} alt="icon" />
        </div>
        <div className="product-second-column">
          <div className="products-description">
            <span className="bold">products</span> <span>that delight</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
