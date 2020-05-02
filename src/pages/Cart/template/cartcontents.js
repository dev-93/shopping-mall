import React, {useState} from 'react';
import "../css/cartcontents.css";
import OderBox from "./oderbox";

function CartContents() {
  const [isdomestic ,setDomestic] = useState(true);
  const [isoverseas ,setOverseas] = useState(false);

  const domesticTab = () => {
    setDomestic(true);
    setOverseas(false)
  }

  const overseasTab = () => {
    setDomestic(false);
    setOverseas(true)
  }
  return (
    <>
      <div className="wrap ca_contents">
        <div className="contents">
          <h3 className="title">CART</h3>
          <div className="container">
            <div className="tab_box">
                <button onClick={domesticTab}>국내상품</button>
                <button onClick={overseasTab}>해외상품</button>
            </div>
            
            <div className="cart_box">
            {
              isdomestic && <OderBox />
            }

            {
              isoverseas && <OderBox />
            }
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