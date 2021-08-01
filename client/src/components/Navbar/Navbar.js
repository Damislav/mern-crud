import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <ul className="nav-ul">
        {user !== null ? (
          <Link onClick={handleLogout} to="/">
            Logout
          </Link>
        ) : (
          <>
            <li className="nav-li">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-li">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
