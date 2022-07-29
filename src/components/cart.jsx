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


// import React, { useState} from 'react'
// export const cartContext = React.createContext([]);

// export const CartContext = (props) => {
//     const [CartItems, setCartItems] = useState([]);
//     const addItem= (item,quantity)=>{
//         let index = isInCart(item.id);
//         if(index>-1){
//             let Cart = CartItems;
//             Cart[index].quantity+=quantity;
//             setCartItems(Cart)
//         }else{
//             setCartItems((prevState) => [...prevState, {...item,"quantity":quantity}])
//         }
//     }
//     const howManyItems = ()=>{return CartItems.length}
//     const removeItem = (itemId)=>{
//         let Cart = CartItems;
//         console.log(Cart);
//         Cart.splice(isInCart(itemId),1);
//         console.log(Cart);
//         setCartItems(Cart)
//     }
//     const clear = ()=>{setCartItems([])}
//     const isInCart = (id)=>{return CartItems.findIndex(e=>{return e.id === id ? true : false })}
//     console.log(CartItems)
//     return(
//     <cartContext.Provider value={{CartItems, setCartItems,addItem,removeItem,clear,isInCart,howManyItems}}>
//         {props.children}
//     </cartContext.Provider>
//   )
// }
// export default CartContext;