import React from 'react';
import "../css/cartcontents.css"

function CartContents() {
  return (
    <>
      <div className="wrap ca_contents">
        <div className="contents">
          <h3 className="title">CART</h3>
          <div className="container">
            <div className="tab_box">
              <button type="button" className="tab domestic">국내배송상품(<span className="num">0</span>)</button>
              <button type="button" className="tab foreign">해외배송상품(<span className="num">0</span>)</button>
            </div>
            
            <div className="cart_box">
              <div className="empty_cart">장바구니가 비어 있습니다.</div>
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