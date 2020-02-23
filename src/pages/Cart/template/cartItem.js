import React, {useState} from "react";
import "../css/cartItem.css"

export default function CartItem(){
    const [Price, setPrice] = useState(0);
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
                        <td class="check_box">
                            <input type="checkbox"/>
                        </td>
                        <td class="image">안녕</td>
                        <td class="price">20,000</td>
                        <td class="quantity">
                            <input type="number" placeholder="1" min="1" max="5" required/>
                        </td>
                        <td className="total">{Price}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}