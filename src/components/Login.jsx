import React from "react";

function Login() {
  return (
    <div>
      <form className="d-flex justify-content-center flex-column align-items-center">
        <div className="mb-3 w-40">
          <input type="email" className="form-control" placeholder="Username" />
        </div>
        <div className=" mb-4 w-40">
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
