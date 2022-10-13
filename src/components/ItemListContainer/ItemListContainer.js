import React, {useEffect, useState} from "react";
import { ItemList } from "../ItemList";
// import { products } from "../../assets/products";
// import { customFetch } from "../../utils/customFetch";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
 
const ItemListContainer = ({greeting}) => {

    const { IdCategoria } = useParams();
    
    const [listProduct, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");
        if(IdCategoria) {
            setLoading(false);
            const queryFilter = query(queryCollection, where('category', '==', IdCategoria))
            getDocs(queryFilter)
            .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data() }))));
        } else{
            getDocs(queryCollection)
            .then((res) => {
                setLoading(false);
                setListProducts(res.docs.map(product => ({id: product.id, ...product.data()})))});
        }
    }, [IdCategoria]);

    return (
        <>
            {loading ? 
               <div className="spinner">
                <ClipLoader />  
               </div>            
            :
            <>
              <h1 className="h1b">{greeting}</h1>        
              <ItemList listProduct={listProduct}/> 
            </>
            }
        </>
    )
}

    export default ItemListContainer