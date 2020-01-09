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
            <figure></figure>
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
          <div className="item"></div>
          <div className="item"></div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default MainContents;
