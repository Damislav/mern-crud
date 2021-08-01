import React, { useState } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authAction";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Please inout your information correctly");
    } else {
      const newTodo = {
        username,
        email,
        password,
      };

      dispatch(registerUser(newTodo));

      history.push("/login");
    }
  };

  return (
    <div style={{ width: "700px", marginLeft: "auto", marginRight: "auto" }}>
      <h1>Register</h1>
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
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
