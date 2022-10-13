import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [userList, setUserList] = useState([]);
  return (
    <Router>
      <div className="App">
        {console.log(userList)}
        <Navbar login={login} setLogin={setLogin} />
        <hr />
        <Routes>
          <Route exact path="/" element={<Login setLogin={setLogin} />} />
          <Route
            path="/dashboard"
            element={
              login ? (
                <Dashboard userList={userList} setUserList={setUserList} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />

          <Route
            path="/create-user"
            element={
              login ? (
                <CreateUser userList={userList} setUserList={setUserList} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />

          <Route
            path="/update-user"
            element={
              login ? (
                <UpdateUser userList={userList} setUserList={setUserList} />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
