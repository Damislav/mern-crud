import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ width: "700px", marginLeft: "auto", marginRight: "auto" }}>
      <h1>Register</h1>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          style={{}}
          value={username}
          type="text"
          placeholder="Enter your username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          text="password"
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
