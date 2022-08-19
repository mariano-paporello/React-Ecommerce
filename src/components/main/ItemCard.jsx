import React from "react";
import { Link } from "react-router-dom";
const ItemCard = (props) => {
    <Link to={"/category/cocktail"}>Cocktails</Link>
    
    return props.noStock !== undefined
        ? 
        (<div className="itemCard">
        <div className="imagePartCard">
             <picture> <img className="imageOfCard" src={props.img} alt="" /></picture> 
        </div>
        <div className="textPartCard">
            <h4>{props.name}</h4>
            <h5>${props.price}</h5>
            <div className="infoButtonDiv">
            <button className="moreInfoButton">More info</button>
            </div>
            
        </div>
        <hr />
        <div className="cardFooter">
            <p>No stock</p>
        </div>
    </div>)
        :
        ( <div className="itemCard">
            <Link to={`/item/${props.id}`}>
            <div className="imagePartCard">
                 <picture> <img className="imageOfCard" src={props.img} alt="" /></picture> 
            </div>
            <div className="textPartCard">
                <h4>{props.name}</h4>
                <h5>${props.price}</h5>
                <div className="infoButtonDiv">
                <button className="moreInfoButton">More info</button>
                </div>
                
            </div>
            <hr />
            <div className="cardFooter">
                <p>Stock disponible:{props.stock}</p>
            </div>
            </Link>
        </div>)
     ;
}
 
export default ItemCard;