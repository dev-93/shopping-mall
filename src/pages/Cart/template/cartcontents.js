import React, {useState} from 'react';
import "../css/cartcontents.css";
import CartList from "../../../components/cartlist/cartlist";
import CartItem from "./cartItem";


const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
}

function CartContents() {
  const {currentItem ,changeItem} = useTabs(0, CartList);

  return (
    <>
      <div className="wrap ca_contents">
        <div className="contents">
          <h3 className="title">CART</h3>
          <div className="container">
            <div className="tab_box">
              {CartList.map((tabs, index) => 
                (<button onClick={() => changeItem(index)} key={tabs.id}>{tabs.tab}</button>
              ))}
            </div>

            <CartItem />
            
            <div className="cart_box">
                <div className="empty_cart">{currentItem.content}</div>
            </div>

            <div className="bt_box">
              <button type="button">전체상품주문</button>
              <button type="button">선택상품주문</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default CartContents;