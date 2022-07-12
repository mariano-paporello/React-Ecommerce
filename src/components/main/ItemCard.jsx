import React from "react";
import ItemCount from "./ItemCount";
const ItemCard = (props) => {
    function adding(count){
        alert(`Se agregó ${props.name} en una cantidad de ${count} al carrito`)
    }
    return ( 
        <div className="itemCard">
            <div className="imagePartCard">
                 <picture> <img className="imageOfCard" src={props.img} alt="" /></picture> 
            </div>
            <div className="textPartCard">
                <h4>{props.name}</h4>
                <p>{props.info}</p>
                <h5>${props.price}</h5>
                <button>More info</button>
                <div className="itemCountCss">
                    <ItemCount stock={props.stock} initial={1} onAdd={adding} />
                </div>
                <hr />
                <p>Stock disponible:{props.stock}</p>
            </div>
        </div>
     );
}
 
export default ItemCard;