import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ width: "700px", marginLeft: "auto", marginRight: "auto" }}>
      <h1>Login</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
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
          text="password"
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
