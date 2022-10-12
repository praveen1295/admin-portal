import React from "react";

function CreateUser() {
  return (
    <div className="d-flex justify-content-center">
      <form className="d-flex flex-column gap-3 border border-4 rounded px-5 py-2">
        <h2 className="text-center border-bottom">User Details</h2>

        <div className="d-flex ">
          <div className=" w-25 mb-1">
            <label>First Name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div className=" mx-5 w-25">
            <label>Last Name</label>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group w-50">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group w-50 mt-3">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group w-50">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
          />
        </div>
        <div className="form-row">
          <label htmlFor="gender">Gender</label>
          <div className="form-group d-flex gap-4">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" />
              <label class="form-check-label" for="gender">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" />
              <label class="form-check-label" for="gender">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="status">Status</label>
          <div className="form-group d-flex gap-4">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" />
              <label class="form-check-label" for="status">
                Active
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="status" />
              <label class="form-check-label" for="status">
                Inactive
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary "
          style={{ width: "25%", margin: "auto" }}
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
