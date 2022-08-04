import React from "react";
import ItemCard from "./ItemCard";
const ItemList = (props) => {
    const items = props.items
    return (<>{
        items.map((item)=>{
            return <div className="card">
                    <ItemCard id={item.idFire} img={item.drinkImg} name={item.nameDrink} price={item.price} stock={item.stock}/>
                    </div>
        })
    }</>  
    );
}
 
export default ItemList;