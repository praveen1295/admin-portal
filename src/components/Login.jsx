import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const admin = {
  name: "abcd",
  password: "1234",
};
function Login({ setLogin }) {
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === admin.name && password === admin.password) {
      setName("jhjk");
      setLogin(true);
      navigate("/dashboard");
    } else {
      setError(true);
      setName("");
      setPassword("");
    }
  };
  return (
    <div>
      {error && <Error>Invalid Admin Details</Error>}
      <form className="d-flex justify-content-center flex-column align-items-center">
        <div className="mb-3 w-40">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setError(false);
              setName(e.target.value);
            }}
          />
        </div>
        <div className=" mb-4 w-40">
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setError(false);
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary "
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
