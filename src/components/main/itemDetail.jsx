import React, {useContext, useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = (props) => {
    const cartProducts = useContext(CartContext);
    function adding(amount){
        setAmount(amount);
        cartProducts.addItem(props.item, amount);
        console.log(cartProducts)
    }
    const [amount, setAmount] = useState(0);
    const [allIngredients, setIngredients]= useState([]);
    const [allMeasures, setMeasures]= useState([]);
    const ingredientPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(props.ingredients)
        }, 0);
    });
    const measuresPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(props.measures)
        }, 0)
        
    })

    useEffect(() => {
      ingredientPromise.then((response)=>{
        console.log("recibí ingredientes");
        setIngredients(response);
      });
      measuresPromise.then((response)=>{
        console.log("recibí cantidades")
        setMeasures(response)
      })
    }, [props.ingredients, props.measures])
    
    return ( 
    <>
     <div className="detailPart">
        <div className="detailCard">
            <div className="detailTitle">
                <h2>{props.name}</h2>
                <hr />
            </div>
            
            <div className="detailImg">
                <img className="imgDetailPart" src={props.img} alt="" />
            </div>
            <div className="preparationIngredientsMeasures">
                <div className="ingredientsMeasures">
                <div className="ingredients"><h3>Ingredients</h3>
                 <ul className="ulIngredients">
                    {
                    allIngredients.map((ingredient)=>{
                        return <li className="ingredientsLi">{ingredient}</li>
                    })
                    }
                </ul></div>
                <div className="measures">
                    <h3>Measures</h3>
                    <ul className="ulMeasures">
                        {
                            allMeasures.map((measure)=>{
                                return<li className="measuresLi"> {measure}</li>
                            })
                        }
                    </ul>
                </div>
                </div>
                <div className="preparation"> <h3>Preparation</h3>
                 <p className="preparationText">{props.info}</p></div>
            </div>
            <div className="itemCountCss">
                <>Price:${props.price}</>
                {amount === 0 ? 
                (<ItemCount stock={props.stock} initial={1} onAdd={adding} />
                ) : 
                (<><h4 className="addingPop"> {amount} {props.name} will be added to the cart.
                </h4> 
                </>
                )}
             </div>
        </div>
     </div>
     </>
    );
}
 
export default ItemDetail;