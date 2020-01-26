import React from "react";
import "../css/logincontents.css";
import {Link} from "react-router-dom";

function LoginContents(){

  function getInfo(){
    const USER_INFO = "userInfo";
    
    const loadInfo = localStorage.getItem(USER_INFO);
    const parseloadInfo = JSON.parse(loadInfo);

    let i;
    let InfoLength = parseloadInfo.length;

    for (i=0; i < InfoLength; i++ ){
      console.log(parseloadInfo[i].Id);
      console.log(parseloadInfo[i].Pw);
    };
  }

  function checkPw(){
    const loginPw = document.querySelector(".login-pw");
    const loginPwValue = loginPw.value;
    
    if(loginPwValue === "") {
      alert("비밀번호를 입력해주세요.");
    }
    else {
      getInfo();
    }
  }

  function checkId(){
    const loginId = document.querySelector(".login-id");
    const loginIdValue = loginId.value;
    
    if(loginIdValue === "") {
      alert("아이디를 입력해주세요.");
    }
    else {
      checkPw();
    }
  }
 
  return(
    <>
      <div className="wrap lg_contents">
        <div className="container">
          <h3 className="title">Login</h3>
          <div className="lg-box">
            <input type="text" placeholder="ID" className="login-id"/>
            <input type="password" placeholder="PASSWORD" className="login-pw"/>
          </div>

          <div className="bt-box">
            <button type="button" onClick={checkId} className="bt">
              Sign In
            </button>
            <Link to="/join" className="bt">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginContents;