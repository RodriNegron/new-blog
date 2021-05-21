import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../auth/actions/users";

const NavBar = ({ logoutUser }) => {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <img src="logo512.png" height="15" alt="" loading="lazy" />

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./newpost">
              New Post
            </a>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav m-2">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbardrop"
            data-toggle="dropdown"
          >
            {" "}
          </a>
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              to="#"
              onClick={() => logoutUser(history)}
            >
              Logout
            </button>
          </div>
        </li>
        <li className="nav-item">
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            className="rounded-circle m-2"
            height="25"
            alt=""
            loading="lazy"
          />
        </li>
      </ul>
    </nav>
  );
};

export default connect(null, { logoutUser })(NavBar);
