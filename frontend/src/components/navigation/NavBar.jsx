import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="navigation-container">
 
          <li className="navigaton-item">
            <Link to="/">Landing</Link>
          </li>
          <li className="navigaton-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navigaton-item">
            <Link to="/import-files">Import</Link>
          </li>
          <li className="navigaton-item">
            <Link to="/login">Login</Link>
          </li>
      </ul>
    </nav>
  );
};

export default NavBar;
