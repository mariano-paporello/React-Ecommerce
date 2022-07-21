import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    function adding(count){
        alert(`Se agregó ${props.name} en una cantidad de ${count} al carrito`)
    }
    const [allIngredients, setIngredients]= useState([])
    const [allMeasures, setMeasures]= useState([])
    const ingredientPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(props.ingredients)
        }, 0);
    })
    const measuresPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(props.measures)
        }, 0)
        
    })

    useEffect(() => {
      ingredientPromise.then((response)=>{
        console.log("recibí ingredientes")
        setIngredients(response)
      })
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
                 <ItemCount stock={props.stock} initial={1} onAdd={adding} />
             </div>
        </div>
     </div>
     </>
    );
}
 
export default ItemDetail;