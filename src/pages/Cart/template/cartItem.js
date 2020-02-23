import React, {useState} from "react";
import "../css/cartItem.css"

export default function CartItem({}){
    const [Price, setPrice] = useState(0);

    const [Item, setItem] = useState(1);
    const Plus = () => setItem(Item + 1);
    const Minus = () => setItem(Item - 1);

    return (
        <>
            <table className="cart_table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox"/>
                        </th>
                        <th>IMAGE</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="check_box">
                            <input type="checkbox"/>
                        </td>
                        <td className="image">안녕</td>
                        <td className="price">20,000</td>
                        <td className="quantity">
                            <span className="num">{Item}</span>
                            <button type="button" onClick={Plus}>+</button>
                            <button type="button" onClick={Minus}>-</button>
                        </td>
                        <td className="total">{Price}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}