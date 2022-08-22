import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import LoadingSpinner from "./LoadingSpinner"
import ItemList from "./ItemList";
import {getDocs, collection, getFirestore, query, where, limit} from "firebase/firestore"

const ItemListContainer = () => {
    const category = useParams();
    let [items, setItems] = useState(null)
    let [visible, setVisible] = useState(10)
    const showMoreItems = ()=>{
      setVisible((prevValue) => {
        return prevValue + 5;
      })
    }

      useEffect(() => { 
            if(category && category.id){
              const db = getFirestore();
              const docCollection = collection(db, "drinks_db")
              const filteredCollection = query(
                docCollection,
                where("category","==", category.id),
                limit(20)
              )
              getDocs(filteredCollection).then((snapshot)=>{
                const data = snapshot.docs.map(doc=> (
                  {idFire: doc.id,
                  ...doc.data()}
                  ))
               setItems(data) 
              })
           }
           else{
            const db = getFirestore();
            const docCollection = collection(db, "drinks_db")
            getDocs(docCollection).then((snapshot)=>{
              const data = snapshot.docs.map(doc=> (
                {idFire: doc.id,
                ...doc.data()}
                ))
             setItems(data)
            })
           }
        
        
       
      }, [category])
      

    return ( 
        <div className="mainPart">
          {items? 
          (<><div>
            <ItemList  items={items.slice(0, visible)} />  
            </div>
            <div className="flex center LoadMoreButton"><button onClick={showMoreItems}>Load More</button></div>
            </>)
          :
          <LoadingSpinner />
          }
        </div>
     );
}
 
export default ItemListContainer;