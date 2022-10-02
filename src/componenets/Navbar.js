import { LogoutOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {localStorage.getItem("user") ? (
                <h5
                  className="text text-secondary"
                  style={{ cursor: "pointer" }}
                  onClick={() => logout()}
                >
                  logout{" "}
                </h5>
              ) : (
                ""
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {localStorage.getItem("user") ? "" : "Login"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/register">
                {localStorage.getItem("user") ? "" : "Register"}
              </Link>
            </li>
          </ul>
          <span className="navbar-text"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
