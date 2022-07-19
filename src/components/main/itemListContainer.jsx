import ItemCard from "./ItemCard";
import Drinks from "./products.json"
import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {
    const category = useParams();
      let [items, setItems] = useState([])

      let itemsPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(Drinks)
          
        }, 700);
      })

      useEffect(() => {
        
        itemsPromise.then((response) => {
          console.log('pedí items')
          const products = response

          console.log(category.id)

          if(category && category.id){
             setItems(products.filter((drink)=>{ return drink.category === category.id}))
          }
          else{
            console.log('Paso else')
            setItems(products)
          }
        }).catch((error) => {
          console.error(error)
        })
       
      }, [category])
      

    return ( 
        <div className="mainPart">
            {items.map((item)=>{ 
                return <div className="card">
                    <ItemCard id={item.idDrink} img={item.drinkImg} name={item.nameDrink} price={item.price} stock={item.stock}/>
                    </div>
            })}
        </div>
     );
}
 
export default ItemListContainer;