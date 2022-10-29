import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail"
import { useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    
    useEffect(()=> {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", id);
        getDoc(queryDoc)
        .then((res) => {
            setLoading(false);
            setProducto({id: res.id, ...res.data()})})
    }, [id])
    
   return (
    <>
        {loading ?
        <div className="spinner">
            <ClipLoader />  
        </div> 
           :
        <ItemDetail item = {producto}/>} 
    </>
   )
}

export {ItemDetailContainer}
