import React, { Component } from "react";
import "./DashBoard.css";
import Icon from "./../assets/retail/group-7.svg";

class DashBoard extends Component {
  render() {
    return (
      <div className="content">
        <div className="tech-first-column">
          <div className="dashboard-description">
            <span className="bold">5 tips</span>{" "}
            <span>for executive dashboards</span>
          </div>
        </div>
        <div className="dashboard-second-column">
          <img className="tech-image-style" src={Icon} alt="icon" />
        </div>
      </div>
    );
  }
}

export default DashBoard;
