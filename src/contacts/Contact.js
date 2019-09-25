import React, { Component } from "react";
import "./Contact.css";
import Icon from "./../assets/retail/group-7.svg";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <div className="tech-first-column">
          <div className="contact-description">
            <span>a Seattle-based company with a</span>
            <span className="bold"> global reach </span>
          </div>
        </div>
        <div className="contact-second-column">
          <img className="tech-image-style" src={Icon} alt="icon" />
          <div className="contact-details">
            <span className="connect">connect with us</span>
            <span className="line"></span>
            <div className="contacts-info">
              <div className="email">hello@piktorlabs.com</div>
              <div className="contact-icon">
                <img
                  className="icon"
                  src={require("./../assets/contacts-icon/glyph-logo-may-2016.jpg")}
                  alt="icon"
                />
                <img
                  className="icon"
                  src={require("./../assets/contacts-icon/group-16.jpg")}
                  alt="icon"
                />
                <img
                  className="icon"
                  src={require("./../assets/contacts-icon/group-17.jpg")}
                  alt="icon"
                />
                <img
                  className="icon"
                  src={require("./../assets/contacts-icon/linkedin.jpg")}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
