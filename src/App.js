import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr />
        <Routes>
          <Route exact path="/ll" element={<Login />} />

          <Route path="/" element={<Dashboard />} />

          <Route path="/create-user" element={<CreateUser />} />

          <Route path="/update-user" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
