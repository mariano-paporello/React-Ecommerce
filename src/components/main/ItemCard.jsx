import React from "react";
import { Link } from "react-router-dom";
const ItemCard = (props) => {
    <Link to={"/category/cocktail"}>Cocktails</Link>
    return ( 
        <div className="itemCard">
            <div className="imagePartCard">
                 <picture> <img className="imageOfCard" src={props.img} alt="" /></picture> 
            </div>
            <div className="textPartCard">
                <h4>{props.name}</h4>
                <h5>${props.price}</h5>
                <div className="infoButtonDiv">
                <Link to={`/item/${props.id}`}><button className="moreInfoButton">More info</button></Link>
                </div>
                
            </div>
            <hr />
            <div className="cardFooter">
                <p>Stock disponible:{props.stock}</p>
                </div>
        </div>
     );
}
 
export default ItemCard;