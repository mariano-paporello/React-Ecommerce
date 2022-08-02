import React, {useContext} from "react";
import { CartContext } from "../contexts/CartContext";
const CartItem = (props) => {
    const classCartContext = useContext(CartContext)
    return ( <>
    <div className="cartPolaroids">
                        <ul>
                            <li><h3>{props.item.nameDrink}</h3></li>
                            <hr />
                            <li><img className="imgInCart" src={props.item.drinkImg} alt={props.item.idDrink} /></li>
                            <li>Price: ${props.item.price}</li>
                            <li>Quantity: {props.item.qty}.</li>
                        </ul>
                        <button className="moreInfoButton" onClick={()=>{classCartContext.deleteProduct(props.item.idDrink)}}>Delete Product</button>
    </div>
    </> );
}
 
export default CartItem;