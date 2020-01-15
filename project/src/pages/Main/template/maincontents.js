import React from 'react';
import "../css/maincontents.css";
import Footer from "../../Footer/footer";

function Item({name, image, price, details}) {
  return (
    <li className="item">
      <a className="cloth-box">
        <img src={image} alt={name}/>
      </a>
      <div className="detail-box">
        <p className="name"><a href="#">{name}</a></p>
        <p className="price"><span className="num">{price}</span>원</p>
        <p className="details">{details}</p>
      </div>
      <input type="checkbox" className="hide" id="check-1" />
      <label htmlFor="check-1"></label>
    </li>
  )
}

const ItemList = [
  {
    id:1,
    name: "클랫 밴딩 와이드 생지데님",
    image: "http://new-more.co.kr/web/product/big/20200115/00f8314ba9c9e283e751cf926327ea11.webp",
    price: "37,000",
    details: "트렌디하고 내츄럴한 무드의 밴딩 와이드 생지데님",
  },
  {
    id:2,
    name: "메린 루즈핏 싱글수트",
    image: "http://new-more.co.kr/web/product/big/20200115/821c7c2842a2de5f81dac310cff6f66f.webp",
    price: "75,000",
    details: "부담없이, 멋스럽고 내츄럴한 와이드 핏라인의 슬랙스.",
  },
  {
    id:3,
    name: "메린 밴딩 와이드 슬랙스",
    image: "http://new-more.co.kr/web/product/big/20200115/0ac24c35ea384bab57bc3aa16ca1cdf6.webp",
    price: "29,000",
    details: "트렌디하고 내츄럴한 루즈핏 라인의 싱글수트.",
  },
  {
    id:4,
    name: "세이디 오버핏 라이더 자켓",
    image: "http://new-more.co.kr/web/product/big/201910/5ddaa0bb27cf1c627854a047a54da3a0.gif",
    price: "59,000",
    details: "기획특가, 트렌디하게 착용하기 좋은 오버핏 라이더자켓",
  },
  {
    id:5,
    name: "베이즈 프리미엄 니트지 긴팔티",
    image: "http://new-more.co.kr/web/product/big/20200113/636498baaef517566208f3fe6d16cfec.webp",
    price: "19,900",
    details: "트렌디하고 내츄럴한 루즈핏 라인의 싱글수트.",
  },
  {
    id:6,
    name: "메린 루즈핏 싱글자켓",
    image: "http://new-more.co.kr/web/product/big/20200113/0dd80d16494816b25b6fed56f619b2a3.webp",
    price: "69,900",
    details: "군더더기 없는 깔끔한 디자인의 루즈핏 싱글자켓.",
  },
]

function MainContents(){
  return (
    <>
      <div id="maincontents" className="wrap">
        <div className="best-items container">
          <p className="title">#Best items</p>
          <div className="item"></div>
        </div>

        <div className="new-items container">
          <p className="title">#new items</p>
          <ul className="item-box">
            {ItemList.map(cloth => (
              <Item key={cloth.id} name={cloth.name} image={cloth.image} price={cloth.price} details={cloth.details} />
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default MainContents;
