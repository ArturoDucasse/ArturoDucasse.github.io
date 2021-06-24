import React from "react";

import NavBar from "../components/navBar/NavBar";
import logo from "../images/HeroPage/NavBar/Logo.png";
import "../css/heroPage.css";

const HeroPage = () => {
  return (
    <div className="Container Hero_Container">
      <NavBar logo={logo} color />
    </div>
  );
};

export default HeroPage;
