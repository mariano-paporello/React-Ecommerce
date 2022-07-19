import React from "react";
import ItemCount from "./ItemCount";
const ItemDetail = (props) => {
    console.log(props)
    function adding(count){
        alert(`Se agregó ${props.name} en una cantidad de ${count} al carrito`)
    }
    let ingredients = props.ingredients
    console.log(ingredients)
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
            <div className="preparation">
                 <h3>Preparation</h3>
                 <p>{props.info}</p>
            </div>
            <div className="itemCountCss">
                 <ItemCount stock={props.stock} initial={1} onAdd={adding} />
             </div>
        </div>
     </div>
     </>
    );
}
 
export default ItemDetail;