import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.scss";
import yotub from "../../img/ytd-logo → yt-icon → SVG.svg";
function Navbar() {
  return (
    <header className="header">
      <div className="nav__logo">
        <FontAwesomeIcon icon={faBars} className="icon" />
        <img src={yotub} alt="" />
      </div>
      <div className="nav__input">
        <form className="form">
          <input type="search" placeholder="Search" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

        <button className="micrafon">
          <FontAwesomeIcon icon={faMicrophone} className="icon" />
        </button>
      </div>
      <div className="nav__icon">
        <FontAwesomeIcon icon={faVideoSlash} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <button className="sign">
          <FontAwesomeIcon icon={faUser} className="icon" />
          Sign
        </button>
      </div>
    </header>
  );
}

export default Navbar;
