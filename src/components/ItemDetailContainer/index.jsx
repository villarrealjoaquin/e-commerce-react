import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/itemDetail"


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    useEffect(()=> {

        const getItem = async () => {
            try{
                const respuesta = await fetch('https://fakestoreapi.com/products/3');
                const data = await respuesta.json();
                setProducto(data);
            }
            catch(err){
                console.error(err);
            }
        }
        
        getItem(); 

    }, [])

  

   return (
    <>
        <ItemDetail item = {producto}/> 
    </>
   )
}

export {ItemDetailContainer}
