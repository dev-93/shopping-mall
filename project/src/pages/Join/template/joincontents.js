import React from "react";
import "../css/joincontents.css"

function JoinContents(){
  return(
    <>
      <div className="wrap jo_contents">
        <div className="form">
          <h3 className="title">Join Us</h3>
          <table border="1" summary>
            <caption>회원 기본정보</caption>
            <tbody>
              <tr>
                <th scope="row">아이디</th>
                <td>
                  <input minlength="4" maxlength="16" class="inputTypeText" type="text" />
                  <div>
                    <p className="error">아이디를 입력해주세요</p>
                    <p clasName="guide">영문 소문자/숫자, 4-16자</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">비밀번호</th>
                <td>
                  <input autocomplete="off" minlength="4" maxlength="16" type="password"/>
                  <div>
                    <p clasName="guide">영문 소문자/숫자, 4-16자</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">비밀번호 확인</th>
                <td>
                  <input autocomplete="off" minlength="4" maxlength="16" type="password"/>
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
                  <input maxlength="4" type="text" />
                  -
                  <input maxlength="4" type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="bt_join">가입하기</button>
        </div>
      </div>
    </>
  )
}

export default JoinContents;