import React from 'react';
import "../css/maincontents.css";
import Footer from "../../Footer/footer";
import Fade from "../../../components/slider/slider";
import {Link} from "react-router-dom";
import ItemList from "../../../components/itemlist/itemlist";


function Item({id, name, image, price, details}) {
  return (
    <li className="item">
      <Link to={{
        pathname: `/item/${id}`
        }}
      className="cloth-box">
        <img src={image} alt={name}/>
      </Link>
      <div className="detail-box">
        <p className="name">{name}</p>
        <p className="price"><span className="num">{price}</span>원</p>
        <p className="details">{details}</p>
      </div>
      <input type="checkbox" className="hide" id={`check-${id}`} />
      <label htmlFor={`check-${id}`}></label>
    </li>
  )
}

function MainContents(){
  return (
    <>
      <div id="maincontents" className="wrap">
        <div className="best-items container">
          <p className="title">#Best items</p>
          <Fade />
        </div>

        <div className="new-items container">
          <p className="title">#new items</p>
          <ul className="item-box">
            {ItemList.map(cloth => (
              <Item
                key={cloth.id}
                name={cloth.name}
                image={cloth.image}
                price={cloth.price}
                details={cloth.details}
                id={cloth.id}
              />
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default MainContents;
