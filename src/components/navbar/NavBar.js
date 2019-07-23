import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="ui fluid five item menu">
      <a className="item active-item block-icons">
        <i aria-hidden="true" className="home circular icon" />
        <div className="content">Home</div>
      </a>
      <a className="item block-icons">
        <i aria-hidden="true" className="mail outline circular icon" />
        <div className="content">Messages</div>
      </a>
      <a className="item block-icons">
        <i aria-hidden="true" className="star circular icon" />
        <div className="content">Wishlist</div>
      </a>
      <a className="item block-icons">
        <i aria-hidden="true" className="settings circular icon" />
        <div className="content">Settings</div>
      </a>
      <a className="item block-icons">
        <i aria-hidden="true" className="user circular icon" />
        <div className="content">My Account</div>
      </a>
    </div>
  );
};

export default Navbar;
