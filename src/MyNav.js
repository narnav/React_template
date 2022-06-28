import React from "react";
import { Outlet, Link } from "react-router-dom";
const MyNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/waga">waga</Link> |{" "}
            </li>
            <li class="nav-item">
              <Link to="/baga">baga</Link> |{" "}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MyNav;
