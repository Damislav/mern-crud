import React from "react";
import TodoContainer from "../components/Todos/TodoContainer";
import TodoForm from "../components/Todos/TodoForm";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}>Mern Crud</h1>
      <TodoForm />
      <TodoContainer />
    </div>
  );
};

export default Home;
