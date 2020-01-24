import React, {useState} from 'react';
import "../css/itemcontents.css";
import {useParams} from "react-router-dom";
import ItemList from "../../../components/itemlist/itemlist";


const ItemContents = (props) => {
  const [Item, setItem] = useState(0);
  const Plus = () =>  setItem(Item + 1);
  const Minus = () => setItem(Item - 1);

  const {id} = useParams();
  return (
    <>
      <div className="wrap it_contents">
        <div className="container">
          <div className="cloth-box">
            <img src={ItemList[id].image} alt="이미지 이름"/>
          </div>

          <div className="info-box">
            <div className="title-box">
              <p className="name">{ItemList[id].name}</p>
              <p className="info">{ItemList[id].details}</p>
            </div>

            <div className="detail-box">
              <p className="price">
                <span>Price</span>
                <span className="num">{ItemList[id].price}</span>
              </p>
              <p className="color">
                <span>Color</span>
                <select>
                  <option value="*" selected>OPTION</option>
                  <option value="**" disabled>-------------</option>
                  {ItemList[id].colors.map(color => {
                    return <option>{color}</option>;
                  })}
                </select>
              </p>
              <p className="size">
                <span>Size</span>
                <select>
                  <option value="*" selected>OPTION</option>
                  <option value="**" disabled>-------------</option>
                  {ItemList[id].sizes.map(size => {
                    return <option>{size}</option>
                  })}
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
