import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "2rem",
        alignItems: "center",
        background: "grey",
      }}
    >
      <div>Logo</div>
      <div style={{ width: "25%", height: "50px" }}>
        <ul
          style={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/about">About</Link>
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
