import React, {useContext} from "react";
import { CartContext } from "./contexts/CartContext";
import CartItem from "./CartItem"
import { Link } from "react-router-dom";
const Cart = () => {
    const {cartProducts, clear} = useContext(CartContext);
    console.log(cartProducts)
    let totalPrice= 0;
    cartProducts.forEach(element => {
       totalPrice += element.price *element.qty
    });
    return ( 
    <div className="backgroundOfCart">
    <h2 className="cartTitle"> Products in the Cart</h2>
    <hr />
        
            { cartProducts.length === 0? 
            (<div className="cartContainer">
                <h3>There is no products in the Cart </h3>
                <button><Link className="linkInTheCartBH" to={"/"}>Go back to Home</Link></button>
            </div>
            )
            : 
            (<>
                <div className="cartProductsContainer">
                    {
                        cartProducts.map((element)=>(<CartItem item={element} />))
                    }
                
                </div>
                <div className="flex center">
                    <div className="text-align-center">
                        <h4 className="totalToPay">The total is: ${totalPrice}.</h4>
                        <button className="clearTheCart" onClick={()=>clear()}> Clear the Cart</button>
                        <button className="finishThePurcharse"> Finish the purchase </button>
                    </div>
                </div>
                </>
            )

            }
                
            
        
        
    </div> );
}
 
export default Cart;


