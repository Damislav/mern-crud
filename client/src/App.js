import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "./redux/actions/todoActions";

function App() {
  // let dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
