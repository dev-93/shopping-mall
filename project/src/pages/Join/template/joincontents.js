import React from "react";
import "../css/joincontents.css";

function JoinContents(){

  const USER_ID_LS = "userID";
  // const USER_PW_LS = "userPW";

  // function savePw(text){
  //   localStorage.setItem(USER_PW_LS, text);
  // }

  // function submitPw(){
  //   const USER_PW = document.querySelector(".user-pw");
  //   const PwValue = USER_PW.value;

  //   if(PwValue === ""){
  //     alert("비밀번호를 입력해주세요.");
  //   } else {
  //     alert("회원가입이 완료되었습니다.");
  //     savePw(PwValue);
  //   }
  // }
 
  function saveId(text){
    localStorage.setItem(USER_ID_LS, text);
  }

  function countId(){
    let USER_ID = document.querySelector(".user-id");
    let IdValue = USER_ID.value;

    if (IdValue.length < 4 || IdValue.length > 16){
      alert("아이디 폼을 맞춰주세요.")
    } else {
      alert("비밀번호로 넘어갑니다.")
      USER_ID.value = "";
    }
  }

  function submitId(){
    let USER_ID = document.querySelector(".user-id");
    let IdValue = USER_ID.value;

    if(IdValue === ""){
      alert("아이디를 입력해주세요.");
    } else {
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
                    <p className="error">아이디를 입력해주세요</p>
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