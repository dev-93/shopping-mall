import React from 'react';
import "../css/maincontents.css";
import Footer from "../../Footer/footer";

function MainContents(){
  return (
    <>
      <div id="maincontents" class="wrap">
        <div className="best-items container">
          <p className="title">#Best items</p>
          <div className="item"></div>
        </div>

        <div className="new-items container">
          <p className="title">#new items</p>
          <div className="item">
            <a className="cloth-box">
              <img src={require("../img/test_1.jpg")} alt="사진의 네임"/>
            </a>
            <div className="detail-box">
              <p className="name"><a href="#">클랫 밴딩 와이드 생지데님</a></p>
              <p className="price"><span className="num">100,000</span>원</p>
              <p className="details">트렌디하고 내츄럴한 무드의 밴딩 와이드 생지데님.</p>
            </div>
            <input type="checkbox" class="hide" id="check-1" />
            <label for="check-1"></label>
          </div>
          <div className="item">
            <a className="cloth-box">
            <img src={require("../img/test_2.jpg")} alt="사진의 네임"/>

            </a>
            <div className="detail-box">
              <p className="name"><a href="#">메린 루즈핏 싱글수트</a></p>
              <p className="price"><span className="num">100,000</span>원</p>
              <p className="details">부담없이, 멋스럽고 내츄럴한 와이드 핏라인의 슬랙스.</p>
            </div>
            <input type="checkbox" class="hide" id="check-2" />
            <label for="check-2"></label>
          </div>
          <div className="item">
            <a className="cloth-box">
              <img src={require("../img/test_3.jpg")} alt="사진의 네임"/>
            </a>
            <div className="detail-box">
              <p className="name"><a href="#">메린 밴딩 와이드 슬랙스</a></p>
              <p className="price"><span className="num">29,900</span>원</p>
              <p className="details">트렌디하고 내츄럴한 루즈핏 라인의 싱글수트.</p>
            </div>
            <input type="checkbox" class="hide" id="check-3" />
            <label for="check-3"></label>
          </div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default MainContents;
