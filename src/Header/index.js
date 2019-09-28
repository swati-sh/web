import React from "react";
import "./header.css";
import piktorlogo from "./../assets/piktorlabs-logo-white.svg";
import menu from "./../assets/menu-icon.svg";
import close from "./../assets/close.svg";
class Header extends React.Component {
  state = { showSlide: false };
  onShowSlide = () => {
    this.setState({ showSlide: true });
  };
  onHideSlide = () => {
    this.setState({ showSlide: false });
  };
  render() {
    return (
      <header className="header-container">
        <img
          className="header-container__logo"
          src={piktorlogo}
          alt="piktorlogo"
        />
        <div className="side-menu">
          <div className="show-icon">
            <img
              src={menu}
              className="side-menu-icon"
              onClick={this.onShowSlide}
              alt="menu"
            />
          </div>
        </div>
        <div
          className={
            this.state.showSlide
              ? "show-slide-menu slide-menu"
              : "hide-slide-menu slide-menu"
          }
        >
          <div className="menu-content">
            <div className="close-icon">
              <img
                src={close}
                className="close-menu-icon"
                onClick={this.onHideSlide}
                alt="close"
              />
            </div>
            <div></div>
            <div className="side-header-content">
              <nav className="side-header-container">
                <div className="nav-container nav-container-first">about</div>
                <div className="nav-container nav-container-second">work</div>
                <div className="nav-container nav-container-third">join</div>
                <div className="nav-container nav-container-fourth">
                  contact
                </div>
              </nav>
            </div>
            <div className="contact-icon-detail">
              <div className="contact-icon-image">
                <img
                  className="contact-icon"
                  src={require("./../assets/contacts-icon/glyph-logo-may-2016.jpg")}
                  alt="icon"
                />
              </div>
              <div className="contact-icon-image">
                <img
                  className="contact-icon"
                  src={require("./../assets/contacts-icon/group-16.jpg")}
                  alt="icon"
                />
              </div>
              <div className="contact-icon-image">
                <img
                  className="contact-icon"
                  src={require("./../assets/contacts-icon/group-17.jpg")}
                  alt="icon"
                />
              </div>
              <div className="contact-icon-image">
                <img
                  className="contact-icon"
                  src={require("./../assets/contacts-icon/linkedin.jpg")}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="header-section">
          <nav className="header-container__nav">
            <span>about</span>
            <span>work</span>
            <span>join</span>
            <span>contact</span>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
