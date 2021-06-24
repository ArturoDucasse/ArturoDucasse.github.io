import React from "react";

import logo from "../../images/NavBar/logo_transparent.png";
import la from "../../images/NavBar/la_transparent.png";

import "./navBar.css";

const FooterNav = () => {
  return (
    <div className="NavBar sub_container">
      <div className="NavBar_logos flex">
        <img
          alt="logo"
          src={logo}
          width="40px"
          height="40px"
          style={{ marginRight: "10px" }}
        />
        <img alt="mountain" src={la} height="36px" width="89px" />
      </div>
      <div className="footer_text">
        <p>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default FooterNav;
