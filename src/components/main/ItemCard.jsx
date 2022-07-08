import React from "react";
import ItemCount from "./ItemCount";
const ItemCard = (props) => {
    function adding(count){
        alert(`Se agregó ${props.name} en una cantidad de ${count} al carrito`)
    }
    return ( 
        <div className="itemCard">
            <div>
                <picture> <img src={props.img} alt="" /></picture>
            </div>
            <div>
                <h5>{props.name}</h5>
                <p>{props.info}</p>
                <h6>${props.price}</h6>
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