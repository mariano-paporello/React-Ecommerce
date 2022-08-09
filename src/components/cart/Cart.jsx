import React, {useContext} from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem"
import { Link } from "react-router-dom";
const Cart = () => {
    const {cartProducts, clear, sendOrder } = useContext(CartContext);
    const orderHandler = () =>{
        const HtmlCollectionInputs = document.getElementsByTagName("input")
        const inputsArray = Array.from(HtmlCollectionInputs)
        const data = inputsArray.map((element)=>{
           return  element.value
        })
        sendOrder(totalPrice, {name: data[0], mail:data[1], telephone:data[2]})
    }
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
                <button className="buttonToGoHome"><Link className="linkInTheCartBH" to={"/"}>Go back to Home</Link></button>
            </div>
            )
            : 
            (<>
                <div className="cartProductsContainer">
                    {
                        cartProducts.map((element)=>(<CartItem item={element} />))
                    }
                
                </div>
                <div className="flex center infoPart">
                <h3>Order :</h3>
                    <form  className="formInCart" action="">
                        
                        <label htmlFor="inptName">Your full Name:</label>
                        <input type="text" id="fname" name="fname" />
                        <label  htmlFor="email">Gmail:</label>
                        <input type="email" id="email" name="email" />
                        <label  htmlFor="tel">Telephone number</label>
                        <input type="tel" name="tel" id="tel"  />
                    </form>
                    
                   
                    <div className="text-align-center endOfBuyPart">
                        <h4 className="totalToPay">The total is: ${totalPrice}.</h4>
                        <button type="reset" className="clearTheCart" onClick={()=>clear()}> Clear the Cart</button>
                        <button type="submit" className="finishThePurcharse" onClick={()=>orderHandler() }> Finish the purchase </button>
                    </div>
                </div>
                
                </>
            )

            }
                
            
        
        
    </div> );
}
 
export default Cart;


