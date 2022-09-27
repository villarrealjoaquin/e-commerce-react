import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../assets/products"
import { customFetch } from '../../utils/customFetch'
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true)

    const {id} = useParams();
    
    useEffect(()=> {
        customFetch(products, parseInt(id))
        .then((res)=>{
            setLoading(false)
            setProducto(res)} )
    }, [id])
    
    // const getItem = async () => {
        //     try{
            //         const respuesta = await fetch('https://fakestoreapi.com/products/2');
            //         const data = await respuesta.json();
            //         setProducto(data);
            //     }
            //     catch(err){
                //         console.error(err);
                //     }
                // }
                
                // getItem(); 
    
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
