import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import Drinks from "./products.json"
const ItemDetailContainer = () => {
    const  idDetails = useParams()
    let [item, setItem] = useState([])
    const itemPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Drinks)
        }, 0);
    })
    
    useEffect(
        ()=>{
        itemPromise.then((response)=>{
           const itemDetail = response ;
           const itemFound = itemDetail.filter((element)=> element.idDrink === idDetails.id)
           setItem(itemFound[0])
           console.log("pedí itemDetail" )
            
        })
        itemPromise.catch((error)=>{
            console.error(error)
        })
        

    }, [idDetails])
    return ( 
        <>
            <ItemDetail  key={item.idDrink} img={item.drinkImg} name={item.nameDrink} price={item.price} stock={item.stock} info={item.drinkInstructions} ingredients={item.ingredients} measures={item.measures}/>
        </>
     );
}
export default ItemDetailContainer;