import React from "react";
import ItemCard from "./ItemCard";
const ItemList = (props) => {
    const items = props.items
    return (<div className="itemList">{
        items.map((item)=>{
            return item.stock === 0 
            ? 
            (<div className="card">
                <ItemCard id={item.idFire} img={item.drinkImg} name={item.nameDrink} price={item.price} noStock={true}/>
            </div>) 
            : (<div className="card">
                <ItemCard id={item.idFire} img={item.drinkImg} name={item.nameDrink} price={item.price} stock={item.stock}/>
            </div>)

            
             
        })
    }</div>  
    );
}
 
export default ItemList;