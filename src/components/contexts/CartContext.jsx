import React, {createContext, useState} from "react";


export const CartContext = createContext();
const CartProvider = (props) => {
    const [cartProducts, setCartProducts]= useState([]);
    const addItem=(item, quantity)=>{
        let index = existInCart(item.idDrink)
        console.log(index)
        console.log(item.idDrink)
        if(index !== -1){
            const FinalCart = cartProducts;
            FinalCart[index].qty+=1
            console.log(FinalCart[index].qty)
            // FinalCart[index].qty+=quantity;
            setCartProducts(FinalCart)
        }
        else{
            setCartProducts((prevState)=>[...prevState, item])
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