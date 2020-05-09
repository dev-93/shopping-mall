import React, {useState} from "react";
import OderList from "../../../components/oderlist/oderlist";
import "../css/oderbox.css"

export default function OderBox(){
    const [quantity, setQuantity] = useState(1);
    
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
                                <div className="body" key={list.id}>
                                    <div className="contents check_box">
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="contents image">
                                        <img src={list.image} alt="사진"/>
                                    </div>
                                    <div className="contents price">
                                        <span>{list.price}</span>
                                    </div>
                                    <div className="contents counter">
                                        <span>{quantity}</span>
                                        <button type="button" onClick={() => {
                                            (quantity < 100) && setQuantity(quantity+ 1);
                                        }}>
                                            <span>+</span>
                                        </button>
                                        <button type="button" onClick={() => {
                                            return ((quantity> 1 ) ? setQuantity(quantity- 1) : alert("수량을 확인해주세요."));
                                        }}>
                                            <span>-</span>
                                        </button>
                                    </div>
                                    <div className="contents total">
                                        <span>{list.price * quantity}</span>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                )
            }
        </>
    )
}