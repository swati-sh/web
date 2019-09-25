import React, { Component } from "react";
import "./Retail.css";
import Icon from "./../assets/retail/group-7.svg";

class Retail extends Component {
  render() {
    return (
      <div className="content">
        <div className="first-column">
          <img className="image-style" src={Icon} alt="icon" />
        </div>
        <div className="second-column">
          <span className="description">retail </span>
          <br />
          <span className="description bold">reimagined</span>
        </div>
      </div>
    );
  }
}

export default Retail;
