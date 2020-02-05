import React from "react";
import "./css/footer.css";

function Footer(){
  return(
    <>
      <div id="footer">
        <div className="company">
          <ul className="row">
            <li className="cell">HOME</li>
            <li className="cell">COMPANY</li>
            <li className="cell">AGREEMENT</li>
            <li className="cell">PRIVACY POLICY</li>
            <li className="cell">GUIDE</li>
          </ul>
        </div>

        <div className="bottom">
          <p>PhoneNumber: 010-xxxx-xxxx</p>
          <p>Address: 서울특별시 구로구</p>
          <p>COPYRIGHT (C) ALL RIGHTS RESERVED. KIMTAENAM</p>
        </div>
      </div>
    </>
  )
}

export default Footer;