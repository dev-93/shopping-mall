import React from "react";
import "../css/logincontents.css";
import {Link} from "react-router-dom";

function LoginContents(){

  function getInfo(){
    let loginId = document.querySelector(".login-id");
    let loginIdValue = loginId.value;

    let USER_INFO = "userInfo";
    
    let loadInfo = localStorage.getItem(USER_INFO);
    let parseInfo = JSON.parse(loadInfo);

    const idStore = parseInfo.filter((ele, index) => console.log(ele.Id));
    console.log(idStore);
   
    // const compareId = (loginIdValue === idStore) ? alert("LS에 아이디가 있습니다") : alert("LS에 아이디가 없습니다.");

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