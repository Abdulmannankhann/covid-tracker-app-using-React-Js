import React from "react";
import coronavirus from "./images/coronavirus.png";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <img className="header--image" src={coronavirus} />
        <h2 className="header--title">Covid Tracker</h2>
        <ul>
          <li>
            <Link to="/">Global</Link>
          </li>
          <li>
            <Link to="/india">India</Link>
          </li>
          <li>
            <Link to="/search">Search by Country name</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
