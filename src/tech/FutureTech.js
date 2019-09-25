import React, { Component } from "react";
import "./FutureTech";
import "./FutureTech.css";
import Icon from "./../assets/retail/group-7.svg";

class FutureTech extends Component {
  render() {
    return (
      <div className="content">
        <div className="tech-first-column">
          <div className="tech-description">futuristic tech for a</div>
          <div className="tech-description bold">cleaner tomorrow</div>
        </div>
        <div className="tech-second-column">
          <img className="tech-image-style" src={Icon} alt="icon" />
        </div>
      </div>
    );
  }
}

export default FutureTech;
