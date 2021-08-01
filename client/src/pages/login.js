import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, loginUser } from "../redux/actions/authAction";
import { LOGIN_USER } from "../redux/actions/types";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await login({ username, password });

      if (res.data) {
        // şave user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // SAVE USER AND TOKEN TO REDUX
        // dispatch({
        //   type: LOGIN_USER,
        //   payload: res.data,
        // });
        dispatch(loginUser(res.data));
        history.push("/");
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div style={{ width: "700px", marginLeft: "auto", marginRight: "auto" }}>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter your username"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
