import cart from '../cart.png';
import React, {useContext} from 'react';
import { CartContext } from "./contexts/CartContext";
const CartWidget = () => {
    const cartProducts = useContext(CartContext);
    return ( 
        <>
        {cartProducts.length=== 0 ?(
         <></>
        )
        :
        (<>
            <span>
                <img className="cartImage" src={cart} alt="Cart"/>
            </span>
            <span>
                {cartProducts.cartProducts.length}
            </span>
        </>
        )}
        </>
     );
}
 
export default CartWidget