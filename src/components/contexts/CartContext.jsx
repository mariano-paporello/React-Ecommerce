import React, {createContext, useState} from "react";


export const CartContext = createContext();
const CartProvider = (props) => {
    const [cartProducts, setCartProducts]= useState([]);
    const addItem=({item, quantity})=>{
        let index = existInCart(item.idDrink)
        if(index > -1){
            cartProducts[index].qty += quantity;
            console.log(quantity)
            console.log(cartProducts[index])
            setCartProducts(cartProducts)
    
        }
        else{
            setCartProducts((prevState)=>[...prevState, {...item,"qty":quantity}])
        }
     }
     const existInCart = (id)=>{return cartProducts.findIndex(e=>{ return e.idDrink === id ? true : false })}
    
    return ( 
        <CartContext.Provider value={{cartProducts, setCartProducts,addItem,existInCart}}> 
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;