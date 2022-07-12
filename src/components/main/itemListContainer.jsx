import ItemCard from "./ItemCard";
import { faker } from '@faker-js/faker'
import React,{useState, useEffect} from "react";
const ItemListContainer = () => {
    const seedDB = (amount) => {
        const db = []
        for (let i = 0; i < amount; i++) {
          db.push({
            id: i,
            name: faker.commerce.product(),
            info: faker.commerce.productDescription(),
            img: faker.image.image(),
            price: faker.random.numeric(3),
            stock: faker.random.numeric(1)
          })
        }
        return db
      }
      const [items, setItems] = useState([])
      
      useEffect(
        () => {
        let itemsPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(items)
          }, 1000);
        })
        itemsPromise.then((response) => {
          response = setItems(seedDB(20))
  
        }).catch((error) => {
          console.error(error)
        })
       
      }, [])
      

    return ( 
        <div className="mainPart">
            {items.map((item)=>{
                return <div className="card">
                    <ItemCard key={item.id} img={item.img} name={item.name} price={item.price} info={item.info} stock={item.stock}/>
                    </div>
            })}
        </div>
     );
}
 
export default ItemListContainer;