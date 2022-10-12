import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center">
      <form>
        <div className="mb-3 m-auto w-50">
          <input type="email" className="form-control" placeholder="Username" />
        </div>
        <div className="m-auto mb-4 w-50">
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
