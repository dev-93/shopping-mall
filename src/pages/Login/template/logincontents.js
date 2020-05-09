import React from "react";
import FakeAuth from "../../../route/Auth";
import "../css/logincontents.css";
import {Link, useHistory} from "react-router-dom";

function LoginContents(){
  let history = useHistory();

  const USER_INFO = "userInfo";

  const LOGIN_INFO = "loginInfo";
  const loginInfo = [];

  function saveLoginInfo(filtered) {
    FakeAuth.authenticate();

    alert(`${filtered[0].Id}님 환영합니다.`);
    
    // fakeAuth.authenticate();

    const Obj = {
      Id: filtered[0].Id,
      Pw: filtered[0].Pw,
    };
    
    loginInfo.push(Obj);
    localStorage.setItem(LOGIN_INFO, JSON.stringify(loginInfo));
    
    history.push("/logined");
  }

  function comparePw(filtered, loginPwValue){
    let filteredPw = filtered[0].Pw;

    loginPwValue === filteredPw ? saveLoginInfo(filtered, filteredPw) : alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }

  function getInfo(loginIdValue, loginPwValue){
    let loadInfo = localStorage.getItem(USER_INFO);
    let parseInfo = JSON.parse(loadInfo);

    let filtered = parseInfo.filter(element => element.Id === loginIdValue);
    filtered == "" ? alert("아이디 또는 비밀번호가 일치하지 않습니다.") : comparePw(filtered, loginPwValue);
  }

  function checkPw(loginIdValue){
    let loginPw = document.querySelector(".login-pw");
    let loginPwValue = loginPw.value;
    
    if(loginPwValue === "") {
      alert("비밀번호를 입력해주세요.");
    }
    else {
      getInfo(loginIdValue, loginPwValue);
    }
  }

  function checkId(){
    let loginId = document.querySelector(".login-id");
    let loginIdValue = loginId.value;
    
    if(loginIdValue === "") {
      alert("아이디를 입력해주세요.");
    }
    else {
      checkPw(loginIdValue);
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
              Log In
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