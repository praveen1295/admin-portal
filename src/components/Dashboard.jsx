import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "./UserDetails";

function Dashboard({ userList, setUserList }) {
  const [showDetails, setShowDetails] = useState(false);
  const [search1, setSearch1] = useState(false);
  const [search2, setSearch2] = useState(false);
  const [currUser, setCurrUser] = useState({});

  const navigate = useNavigate();

  const userDetail = (user) => {
    setShowDetails(true);
    setCurrUser(user);
  };
  const handleDelete = (id) => {
    const newList = userList.filter((user) => id !== user.id);
    setUserList(newList);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => navigate("/create-user")}
        >
          Create User
        </button>
        <div>
          <h3>Filter</h3>
          Gender
        </div>
      </div>
      {showDetails && (
        <UserDetails setShowDetails={setShowDetails} user={currUser} />
      )}
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">
              {search1 ? (
                <div className="d-flex align-items-center">
                  <input
                    type="search"
                    className="form-control w-50"
                    placeholder="Username"
                  />
                  <i
                    className="fa-solid fa-xmark text-primary ps-2"
                    onClick={() => setSearch1(false)}
                  ></i>
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <span>Username</span>
                  <i
                    className="fa-sharp fa-solid fa-magnifying-glass"
                    onClick={() => setSearch1(true)}
                  ></i>
                </div>
              )}
            </th>
            <th scope="col">
              {search2 ? (
                <div className="d-flex align-items-center">
                  <input
                    type="search"
                    className="form-control w-50"
                    placeholder="Name"
                  />
                  <i
                    className="fa-solid fa-xmark text-primary ps-2"
                    onClick={() => setSearch2(false)}
                  ></i>
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <span>First Name</span>
                  <i
                    className="fa-sharp fa-solid fa-magnifying-glass"
                    onClick={() => setSearch2(true)}
                  ></i>
                </div>
              )}
            </th>

            <th scope="col">Last Name</th>
            <th scope="col">
              Status
              <select className="border border-0 mx-2">
                <option className="border border-0" value="0">
                  All
                </option>
                <option className="border border-0" value="1">
                  Active
                </option>
                <option className="border border-0" value="2">
                  Inactive
                </option>
              </select>
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    className="btn btn-info m-2"
                    onClick={() => userDetail(user)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
