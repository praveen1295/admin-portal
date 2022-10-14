import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function UpdateUser({ userList, setUserList, selectedUser, index }) {
  const [user, setUser] = useState(selectedUser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = [...userList];
    list.splice(index, 1, user);
    setUserList(list);
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="d-flex flex-column gap-3 border border-4 rounded px-5 py-2 m-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center border-bottom">User Details</h2>

        <div className="d-flex ">
          <div className=" w-25 mb-1">
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First name"
              value={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className=" mx-5 w-25">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last name"
              value={user.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group w-50">
            <label htmlFor="inputEmail4">Username</label>
            <input
              name="userName"
              type="text"
              className="form-control"
              placeholder="Username"
              value={user.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group w-50 mt-3">
            <label htmlFor="inputEmail4">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group w-50 mt-3">
            <label htmlFor="inputPassword4">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group w-50">
          <label htmlFor="inputAddress">Address</label>
          <input
            name="address"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="gender">Gender</label>
          <div className="form-group d-flex gap-4">
            <div className="form-check">
              <input
                className="form-check-input cp"
                id="m"
                checked={user.gender === "Male"}
                type="radio"
                name="gender"
                value={"Male"}
                onChange={handleChange}
              />

              <label className="form-check-label cp" htmlFor="m">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input cp"
                type="radio"
                id="f"
                checked={user.gender === "Female"}
                name="gender"
                value={"Female"}
                onChange={handleChange}
              />

              <label className="form-check-label cp" htmlFor="f">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="status">Status</label>
          <div className="form-group d-flex gap-4">
            <div className="form-check">
              <input
                className="form-check-input cp"
                id="a"
                type="radio"
                name="status"
                value={"Active"}
                checked={user.status === "Active"}
                onChange={handleChange}
              />
              <label className="form-check-label cp" htmlFor="a">
                Active
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input cp"
                id="i"
                type="radio"
                name="status"
                value={"Inactive"}
                checked={user.status === "Inactive"}
                onChange={handleChange}
              />
              <label className="form-check-label cp" htmlFor="i">
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
          Update User
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
