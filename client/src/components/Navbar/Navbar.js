import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <ul className="nav-ul">
        <li className="nav-li">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>{" "}
        <li className="nav-li">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Navbar;
