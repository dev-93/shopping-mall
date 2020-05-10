import React, {useState} from "react";
import OderList from "../../../components/oderlist/oderlist";
import overseasList from "../../../components/oderlist/overseasList";
import "../css/oderbox.css"

function OderItem({id, image, price, quantity, title}) {
    const [isquantity, setQuantity] = useState(quantity);

    return (
        <div className="body" key={id}>
            <div className="contents check_box">
                <input type="checkbox"/>
            </div>
            <div className="contents image">
                <img src={image} alt="사진"/>
            </div>
            <div className="contents price">
                <span>{price}</span>
            </div>
            <div className="contents counter">
                <span>{isquantity}</span>
                <button type="button" onClick={() => {
                    (isquantity < 100) && setQuantity(isquantity+ 1);
                }}>
                    <span>+</span>
                </button>
                <button type="button" onClick={() => {
                    return ((isquantity> 1 ) ? setQuantity(isquantity- 1) : alert("수량을 확인해주세요."));
                }}>
                    <span>-</span>
                </button>
            </div>
            <div className="contents total">
                <span>{price * isquantity}</span>
            </div>
        </div>
    )
  }

export default function OderBox(){
    
    return (
        <>
            {
                (OderList.length === 0) ? <h3>장바구니가 비어있습니다.</h3> : (
                    <div className="cart_table">
                        <div className="head">
                            <div className="check_box contents">
                                <input type="checkbox"/>
                            </div>
                            <div className="contents">IMAGE</div>
                            <div className="contents">PRICE</div>
                            <div className="contents">QUANTITY</div>
                            <div className="contents">TOTAL</div>
                        </div>
                        {(OderList.map((list)=>{
                            return(
                                <OderItem
                                    key={list.id}
                                    name={list.name}
                                    image={list.image}
                                    price={list.price}
                                    quantity={list.quantity}
                                />
                            )
                        }))}
                    </div>
                )
            }
        </>
    )
}