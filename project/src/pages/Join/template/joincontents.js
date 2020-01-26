import React from "react";
import "../css/joincontents.css";

function JoinContents(){

  let USER_INFO = "userInfo";

  const userInfo = [];

  function saveInfo(){
    let USER_ID = document.querySelector(".user-id");
    let USER_PW = document.querySelector(".user-pw");

    let IdValue = USER_ID.value;
    let PwValue = USER_PW.value;
    let newId = userInfo.length + 1;

    const Obj = {
      Id: IdValue,
      Pw: PwValue,
      key: newId
    };
    
    userInfo.push(Obj);
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
  }

  function comparePw(){
    let USER_ID = document.querySelector(".user-id");
    let USER_PW = document.querySelector(".user-pw");
    let USER_PW_check = document.querySelector(".user-pw-check");

    let PwValue = USER_PW.value;
    let PwCheckValue = USER_PW_check.value;

    if(PwValue !== PwCheckValue) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      saveInfo();
      alert("회원가입이 완료되었습니다.");
      USER_ID.value  = "";
      USER_PW.value  = "";
      USER_PW_check.value  = "";
    }
  }

  function countPw(){
    let USER_PW = document.querySelector(".user-pw");
    let PwValue = USER_PW.value;

    if (PwValue.length < 4 || PwValue.length > 16){
      alert("비밀번호 폼을 맞춰주세요.")
    } else {
      comparePw();
    }
  }

  function submitPw(){
    let USER_PW = document.querySelector(".user-pw");
    let PwValue = USER_PW.value;

    if(PwValue === ""){
      alert("비밀번호를 입력해주세요.");
    } else {
      countPw();
    }
  }
 
  function countId(){
    let USER_ID = document.querySelector(".user-id");
    let IdValue = USER_ID.value;

    if (IdValue.length < 4 || IdValue.length > 16){
      alert("아이디 폼을 맞춰주세요.")
    } else {
      submitPw();
    }
  }

  function submitId(){
    let USER_INFO = "userInfo";

    let USER_ID = document.querySelector(".user-id");
    let IdValue = USER_ID.value;
    let loadInfo = localStorage.getItem("userInfo");
    let parsedInfo = JSON.parse(loadInfo);

    let existId = parsedInfo.Id;
    console.log(existId);


    if(IdValue === ""){
      alert("아이디를 입력해주세요.");
    // } else if(IdValue === existId){

    //   alert("이미 있는 아이디 입니다.");
    }
    else {
      countId(IdValue);
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
                  <input minLength="4" maxLength="16" className="user-id" type="text" />
                  <div>
                    <p className="id-error">아이디를 입력해주세요</p>
                    <p className="guide">영문 소문자/숫자, 4-16자</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">비밀번호</th>
                <td>
                  <input autoComplete="off" minLength="4" maxLength="16" className="user-pw" type="password"/>
                  <div>
                    <p className="guide">영문 소문자/숫자, 4-16자</p>
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