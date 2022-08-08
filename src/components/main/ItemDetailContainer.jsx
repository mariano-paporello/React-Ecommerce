import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getDoc, doc , getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const  idDetails = useParams()
    let [item, setItem] = useState([])
    
    useEffect(
        ()=>{
            const db = getFirestore();
            const docDetail = doc(db, "drinks_db", idDetails.id)
            getDoc(docDetail).then((snapshot)=>{
                const data = {idFire: snapshot.id, ...snapshot.data()}
                setItem(data)
            })
    }, [idDetails]) 
    return ( 
        <>
            <ItemDetail item={item} key={item.idFire} />
        </>
     );
}
export default ItemDetailContainer;
