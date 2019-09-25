import React, { Component } from "react";
import "./Partner.css";
import Icon from "./../assets/partner/combined-shape.svg";
class Partner extends Component {
  render() {
    return (
      <div className="content">
        <div className="partner-first-column">
          <div className="details">
            <div className="bold desc">partner with</div>
            <div className="partner-description">
              to innovate and transform your business
            </div>
          </div>
        </div>
        <div className="partner-second-column">
          <img className="partner-image-style" src={Icon} alt="icon" />
        </div>
      </div>
    );
  }
}

export default Partner;
