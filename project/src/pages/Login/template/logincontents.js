import React from "react";
import "../css/logincontents.css";
import {Link} from "react-router-dom";

function LoginContents(){
  const USER_INFO = "userInfo";

  function comparePw(filtered){
    let filteredPw = filtered[0].Pw;

    let loginPw = document.querySelector(".login-pw");
    let loginPwValue = loginPw.value;

    loginPwValue === filteredPw ? alert(`${filtered[0].Id}님 환영합니다.`) : alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }

  function getInfo(){
    let loginId = document.querySelector(".login-id");
    let loginIdValue = loginId.value;

    
    let loadInfo = localStorage.getItem(USER_INFO);
    let parseInfo = JSON.parse(loadInfo);

    
    let filtered = parseInfo.filter(element => element.Id === loginIdValue) ;
    
    // filtered가 빈배열의 값을 가지면 alert("아이디 또는 비밀번호가 일치하지 않습니다.")
    filtered == "" ? alert("아이디 또는 비밀번호가 일치하지 않습니다.") : comparePw(filtered) ;
  }

  function checkPw(){
    let loginPw = document.querySelector(".login-pw");
    let loginPwValue = loginPw.value;
    
    if(loginPwValue === "") {
      alert("비밀번호를 입력해주세요.");
    }
    else {
      getInfo();
    }
  }

  function checkId(){
    let loginId = document.querySelector(".login-id");
    let loginIdValue = loginId.value;
    
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