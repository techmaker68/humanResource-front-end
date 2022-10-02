import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar px-2">
      <div className="logo" style={{ height: "55px" }}> </div>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item border-bottom">
          <Link className="nav-link active" to="/dashboard">
            Upload attendence file{" "}
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link active" to="/attendence">
            Get user attendence
          </Link>
        </li>

        <li className="nav-item border-bottom">
          <Link className="nav-link active" to="/challengethree">
            Challenge three task
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <h4 className="text text-secondary" to="/dashboard">
          Login or register
        </h4> */}
      </ul>
    </div>
  );
}

export default Sidebar;
