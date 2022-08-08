import React, {createContext, useState} from "react";
import{addDoc, collection, getFirestore, updateDoc, doc} from "firebase/firestore"


export const CartContext = createContext();
const CartProvider = (props) => {
    const [cartProducts, setCartProducts]= useState([]);
    const addItem=({item, quantity})=>{
        let index = existInCart(item.idFire)
        if(index > -1){
            cartProducts[index].qty += quantity;
            
            setCartProducts(cartProducts)
        }
        else{
            setCartProducts((prevState)=>[...prevState, {...item,"qty":quantity}])
        }
     }

     const existInCart = (id)=>{return cartProducts.findIndex(e=>{ return e.idFire === id ? true : false })}

     const deleteProduct = (itemid)=>{
        
        setCartProducts(cartProducts.filter((element)=> element.idFire !== itemid))
     }

     const clear = () =>{
        setCartProducts([])
     }

     const length = (item)=>{return item.length }

    const sendOrder =(totalPrice, object)=>{
        const order = { buyer:object,  items: cartProducts, totalPrice: totalPrice}
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
        .then((res)=> alert(`Felicitaciones se a realizado la compra de forma correcta.
         Tu id de compra es: "${res.id}"`))
        .catch((error)=>console.log(error))
        const updateStock = (order)=>{
            const db = getFirestore();
    
            order.items.forEach((element)=>{
                const orderQuantity = element.qty
                const itemStock = parseInt(element.stock)
                const docReference = doc ( db, "drinks_db", element.idFire)
                updateDoc(docReference, {stock: parseInt(itemStock - orderQuantity)})
            })
        }
        updateStock(order)
    }

    

    return ( 
        <CartContext.Provider value={{cartProducts,setCartProducts,addItem,existInCart,deleteProduct,length,clear, sendOrder}}> 
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;








