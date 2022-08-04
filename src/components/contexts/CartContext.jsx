import React, {createContext, useState} from "react";


export const CartContext = createContext();
const CartProvider = (props) => {
    const [cartProducts, setCartProducts]= useState([]);
    const addItem=({item, quantity})=>{
        let index = existInCart(item.idFire)
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
     const existInCart = (id)=>{return cartProducts.findIndex(e=>{ return e.idFire === id ? true : false })}
     const deleteProduct = (itemid)=>{
        console.log("Se esta borrando un producto seleccionado")
        setCartProducts(cartProducts.filter((element)=> element.idFire !== itemid))
     }
     const clear = () =>{
        setCartProducts([])
     }
     const length = (item)=>{console.log(item.length)
    return item.length }
    return ( 
        <CartContext.Provider value={{cartProducts,setCartProducts,addItem,existInCart,deleteProduct,length,clear}}> 
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;








