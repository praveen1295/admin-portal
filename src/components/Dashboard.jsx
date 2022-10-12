import { Button } from "bootstrap";
import React from "react";

function Dashboard() {
  const user = {
    userName: "s",
    firstName: "s",
    lastName: "h",
    gender: "m",
    status: true,
    address: "",
    email: "",
    password: "",
  };
  return (
    <div>
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Username</th>
            <th scope="col">First Name</th>

            <th scope="col">Last Name</th>
            <th scope="col">
              <div class="dropdown">
                <span
                  class="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </span>
                <ul class="dropdown-menu">
                  <li class="dropdown-item">hh</li>
                  <li class="dropdown-item">Another action</li>
                </ul>
              </div>
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {userlist.map((user, idx) => {
            return ( */}
          <tr>
            <th scope="row">{1}</th>
            <td>{user.userName}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.status}</td>
            <td>
              <button class="btn btn-info m-2">View</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          {/* );
          })}{" "} */}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
