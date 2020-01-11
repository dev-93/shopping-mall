import React from "react";
import "../css/logincontents.css";
import {Link} from "react-router-dom";

function LoginContents(){
  return(
    <>
      <div className="wrap lg_contents">
        <div className="container">
          <h3 className="title">Login</h3>
          <div className="lg-box">
            <input type="text" placeholder="ID"/>
            <input type="password" placeholder="PASSWORD"/>
          </div>

          <div className="bt-box">
            <Link to="/">
              Sign In
            </Link>
            <Link to="/join">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginContents;