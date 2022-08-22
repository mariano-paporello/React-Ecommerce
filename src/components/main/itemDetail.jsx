import React, {useContext, useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = (props) => {
    const cartProducts = useContext(CartContext);
    function adding(amount){
        setAmount(amount);
        cartProducts.addItem({item:props.item, quantity:amount});
    }
    const [amount, setAmount] = useState(0);
    const [allIngredients, setIngredients]= useState(null);
    const [allMeasures, setMeasures]= useState(null);
    const ingredientPromise = new Promise((resolve, reject) => {
        resolve(props.item.ingredients)
    });
    const measuresPromise = new Promise((resolve, reject) => {
        
            resolve(props.item.measures)
        
    })
    useEffect(() => {
        ingredientPromise.then((response)=>{
            
            setIngredients(response);
            
          });
          measuresPromise.then((response)=>{
            
            setMeasures(response)
          })
    }, [props.ingredients, props.measures])
    
    return ( 
    <>
     <div className="detailPart">
        <div className="detailCard">
            <div className="detailTitle">
                <h2>{props.item.nameDrink}</h2>
                <hr />
            </div>
            
            <div className="detailImg">
                {props.item.drinkImg? <img className="imgDetailPart" src={props.item.drinkImg} alt="" />:  "Loading..."}
            </div>
            <div className="preparationIngredientsMeasures">
                <div className="ingredientsMeasures">
                <div className="ingredients"><h3>Ingredients</h3>
                 <ul className="ulIngredients">
                {
                    allIngredients? allIngredients.map((ingredient)=>{
                        return <li className="ingredientsLi">{ingredient}</li>
                    })   : "Loading..."
                    
                }                   
                </ul></div>
                <div className="measures">
                    <h3>Measures</h3>
                    <ul className="ulMeasures">
                        {allMeasures?  allMeasures.map((measures)=>{
                            return <li className="measuresLi">{measures}</li>
                        }): "Loading..."
                        }
                    </ul>
                </div>
                </div>
                <div className="preparation"> <h3>Preparation</h3>
                 <p className="preparationText">{props.item.drinkInstructions}</p></div>
            </div>
            <div className="itemCountCss">
                <>Price:${props.item.price}</>
                {amount === 0 ? 
                (<ItemCount stock={props.item.stock} initial={1} onAdd={adding} />
                ) : 
                (<><Link to={"/cart"}><h4 className="addingPop"> {amount} {props.item.nameDrink} will be added to the cart.
                </h4> </Link>
                </>
                )}
             </div>
        </div>
     </div>
     </>
    );
}
 
export default ItemDetail;