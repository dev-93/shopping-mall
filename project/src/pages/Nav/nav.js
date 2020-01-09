import React from 'react';
import './css/nav.css';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <>
      <div id="left-menu">
        <h1 className="logo">
          <Link to="/Main">NAMI</Link>
        </h1>

        <div className="my-box">
          <ul className="table">
            <li className="table-cell">
              <Link to="/Login">LOGIN</Link>
            </li>
            <li className="table-cell">
              <Link to="/Join">JOIN</Link>
            </li>
            <li className="table-cell">
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>

        <div className="category">
          <p>
            <span>SHOPPING</span>
          </p>
          <ul>
            <li>
              <a href="#">OUTER</a>
            </li>
            <li>
              <a href="#">TOP</a>
            </li>
            <li>
              <a href="#">PANTS</a>
            </li>
            <li>
              <a href="#">SHOES</a>
            </li>
          </ul>
        </div>

        <div className="category">
          <p>
            <span>OUR</span>
          </p>
          <ul>
            <li>
              <a href="#">NOTICE</a>
            </li>
            <li>
              <a href="#">Q / A</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;