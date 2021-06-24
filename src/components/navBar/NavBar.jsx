import React from "react";

import "./navBar.css";

const NavBar = ({ logo, la, color }) => {
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
        {la && <img alt="mountain" src={la} height="36px" width="89px" />}
      </div>
      <ul className={`${color ? "white" : "black"} options flex`}>
        <li style={{ marginRight: "40px" }}>
          <a href="#mid_page">0.1 HISTORY</a>{" "}
        </li>
        <li>
          <a href="#bottom_page">0.2 TEAM</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
