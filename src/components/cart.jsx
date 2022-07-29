import React, {useContext} from "react";
import { CartContext } from "./contexts/CartContext";
const Cart = () => {
    const {cartProducts} = useContext(CartContext);
    console.log(cartProducts)
    let totalPrice= 0;
    cartProducts.forEach(element => {
       totalPrice += element.price *element.qty
    });
    return ( 
    <div className="backgroundOfCart">
    <h2 className="cartTitle"> Products in the Cart</h2>
    <hr  />
        <div className="cartProductsContainer">{
            cartProducts.map((element)=>{
                return (
                    <div className="cartPolaroids">
                        <ul>
                            <li><h3>{element.nameDrink}</h3></li>
                            <hr />
                            <li><img className="imgInCart" src={element.drinkImg} alt="" /></li>
                            <li>Price: ${element.price}</li>
                            <li>Quantity: {element.qty}.</li>
                        </ul>
                    </div>
                )
            })
        }
        </div>
        <h4 className="totalToPay">The total is: ${totalPrice}.</h4>
    </div> );
}
 
export default Cart;


