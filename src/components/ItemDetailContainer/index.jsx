import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../assets/products"
import { customFetch } from '../../utils/customFetch'
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebase/firebase";
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
        // const productCollection = collection(db, 'products');
        // const refDoc = doc(productCollection, id)
        // getDoc(refDoc)
        // .then((result)=>{
        //     setProducto({
        //         id:result.id,
        //         ...result.data()
        //     })
        // })
        // customFetch(products, parseInt(id))
        // .then((res)=>{
        //     setLoading(false)
        //     setProducto(res)} )
    }, [id])
    
   return (
    <>
        {loading?
        <div className="spinner">
            <ClipLoader />  
        </div> 
           :
        <ItemDetail item = {producto}/>} 
    </>
   )
}

export {ItemDetailContainer}
