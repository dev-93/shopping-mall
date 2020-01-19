import React, {useState} from 'react';
import "../css/itemcontents.css";

const ItemContents = (props) => {
  const [Item, setItem] = useState(0);
  const Plus = () =>  setItem(Item + 1);
  const Minus = () => setItem(Item - 1);
  return (
    <>
      <div className="wrap it_contents">
        <div className="container">
          <div className="cloth-box">
            <img src={require("../../Main/img/test_1.jpg")} alt="이미지 이름"/>
          </div>

          <div className="info-box">
            <div className="title-box">
              <p className="name">클랫 밴딩 와이드 생지데님</p>
              <p className="info">트렌디하고 내츄럴한 무드의 밴딩 와이드 생지데님</p>
            </div>

            <div className="detail-box">
              <p className="price">
                <span>Price</span>
                <span className="num">37,000</span>
              </p>
              <p className="color">
                <span>Color</span>
                <select>
                  <option>option</option>
                  <option>black</option>
                  <option>skyblue</option>
                  <option>white</option>
                  <option>blown</option>
                </select>
              </p>
              <p className="size">
                <span>Size</span>
                <select>
                  <option>option</option>
                  <option>----------</option>
                </select>
              </p>
              <p className="amount">
                <span>Amount</span>
                <span>
                  {/* <input type="number" placeholder="1" min="0" max="5" required/> */}
                  <span className="num">{Item}</span>
                  <button type="button" onClick={Plus}>+</button>
                  <button type="button" onClick={Minus}>-</button>
                </span>
              </p>
            </div>
          </div>
          <div className="wish">
            <ul>
              <li>
                <button type="button">buy</button>
              </li>
              <li>
                <button type="button">cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ItemContents;
