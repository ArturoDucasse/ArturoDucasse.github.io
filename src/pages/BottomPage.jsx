import React, { useState } from "react";

import background from "../images/BottomPage/logo.png";

import "../css/bottomPage.css";
import FooterNav from "../components/navBar/FooterNavBar";

const BottomPage = () => {
  const [selected, setSelected] = useState(true);

  const mountainPick = () => {
    setSelected(!selected);
  };

  return (
    <div className="Container Bottom_Container " id="bottom_page">
      <header className="center ">
        <img alt="header" src={background} />
      </header>
      <ul className="mountains ">
        <li
          className={`${selected ? "selected" : "not_selected"}`}
          onClick={mountainPick}
          id="first"
        >
          MOUNTAIN 1
        </li>
        <li
          className={`${!selected ? "selected" : "not_selected"}`}
          onClick={mountainPick}
        >
          MOUNTAIN 2
        </li>
      </ul>
      <div
        className={`schedules_Container ${
          selected ? "Mountain1" : "Mountain2"
        }`}
      >
        <div className="sub_container">
          {selected ? (
            <ul className="climbing_schedules">
              <h1>Schedule</h1>
              <li>
                <p>25 Nov 2016</p>{" "}
                <p style={{ marginLeft: "100px" }}>Vestibulum viverra</p>
              </li>
              <li> </li>
              <li>
                <p>28 Nov 2016</p>{" "}
                <p style={{ marginLeft: "100px" }}>Vestibulum viverra</p>
              </li>
              <li>
                <p>18 Dec 2016</p>{" "}
                <p style={{ marginLeft: "100px" }}>Vestibulum viverra</p>
              </li>
              <li>
                <p>7 Jan 2017</p>{" "}
                <p style={{ marginLeft: "110px" }}>Vestibulum viverra</p>
              </li>
            </ul>
          ) : (
            <ul className="climbing_schedules">
              <h1>Schedule</h1>
              <li>
                <p>17 Nov 2016</p>{" "}
                <p style={{ marginLeft: "100px" }}>Vestibulum viverra</p>
              </li>
              <li> </li>
              <li>
                <p>13 Dec 2016</p>{" "}
                <p style={{ marginLeft: "100px" }}>Vestibulum viverra</p>
              </li>
              <li>
                <p>28 Dec 2016</p>{" "}
                <p style={{ marginLeft: "100px" }}>Vestibulum viverra</p>
              </li>
              <li>
                <p>9 Feb 2017</p>{" "}
                <p style={{ marginLeft: "110px" }}>Vestibulum viverra</p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <footer>
        <FooterNav />
      </footer>
    </div>
  );
};

export default BottomPage;
