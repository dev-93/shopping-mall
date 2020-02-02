import React from "react";
import "../css/joincontents.css";

function JoinContents(){
  const USER_INFO = "userInfo";

  const userInfo = [];

  function saveInfo(IdValue, PwValue){
    let newId = userInfo.length + 1;

    const Obj = {
      Id: IdValue,
      Pw: PwValue,
      key: newId
    };
    
    userInfo.push(Obj);
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
  }

  function comparePw(IdValue, PwValue){
    let USER_PW_check = document.querySelector(".user-pw-check");
    let PwCheckValue = USER_PW_check.value;
    let USER_ID = document.querySelector(".user-id");
    let USER_PW = document.querySelector(".user-pw");

    if(PwValue !== PwCheckValue) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      saveInfo(IdValue, PwValue);
      alert("회원가입이 완료되었습니다.");
      USER_ID.value  = "";
      USER_PW.value  = "";
      USER_PW_check.value  = "";
    }
  }

  function countPw(IdValue, PwValue){
    if (PwValue.length < 4 || PwValue.length > 16){
      alert("비밀번호 폼을 맞춰주세요.")
    } else {
      comparePw(IdValue, PwValue);
    }
  }

  function submitPw(IdValue){
    let USER_PW = document.querySelector(".user-pw");
    let PwValue = USER_PW.value;
    
    if(PwValue === ""){
      alert("비밀번호를 입력해주세요.");
    } else {
      countPw(IdValue, PwValue);
    }
  }
 
  function countId(IdValue){
    if (IdValue.length < 4 || IdValue.length > 16){
      alert("아이디 폼을 맞춰주세요.")
    } else {
      submitPw(IdValue);
    }
  }

  function submitId(){
    let USER_ID = document.querySelector(".user-id");
    let IdValue = USER_ID.value;

    let loadInfo = localStorage.getItem("userInfo");
    let parseInfo = JSON.parse(loadInfo);
    
    let filtered = parseInfo.filter(element => element.Id === IdValue);
    if(IdValue === ""){
      alert("아이디를 입력해주세요.");
    }
    else {
      filtered != "" ? alert(`${IdValue}는 사용중인 아이디입니다.`) : countId(IdValue);
    }
  }

  function LsId(){
    let USER_ID = document.querySelector(".user-id");
    let IdValue = USER_ID.value;
    let IdError = document.querySelector(".id-error");

    let loadInfo = localStorage.getItem("userInfo");
    let parseInfo = JSON.parse(loadInfo);
    
    let filtered = parseInfo.filter(element => element.Id === IdValue);

    if(filtered != ""){
      IdError.innerHTML = "이미 있는 아이디입니다.";
      IdError.style.color = "red";
    } else {
      IdError.innerHTML = "아이디를 입력해주세요";
      IdError.style.color = "black";
    }
  }

  return(
    <>
      <div className="wrap jo_contents">
        <div className="form">
          <h3 className="title">Join Us</h3>
          <table border="1">
            <caption>회원 기본정보</caption>
            <tbody>
              <tr>
                <th scope="row">아이디</th>
                <td className="input-container">
                  <input minLength="4" maxLength="16" className="user-id" type="text" onKeyUp={LsId}/>
                  <div>
                    <p className="id-error">아이디를 입력해주세요</p>
                    <p className="guide">한글/영문/숫자, 4-16자</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">비밀번호</th>
                <td>
                  <input autoComplete="off" minLength="4" maxLength="16" className="user-pw" type="password"/>
                  <div>
                    <p className="guide">한글/영문/숫자, 4-16자</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">비밀번호 확인</th>
                <td>
                  <input autoComplete="off" minLength="4" maxLength="16" className="user-pw-check" type="password"/>
                  <div>
                    <p className="pw-error"></p>
                  </div>
                </td>
              </tr>
              <tr className="phone">
                <th scope="row">핸드폰</th>
                <td>
                  <select name="mobile_num" >
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  -
                  <input maxLength="4" type="text" />
                  -
                  <input maxLength="4" type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="bt_join" onClick={submitId}>가입하기</button>
        </div>
      </div>
    </>
  )
}

export default JoinContents;