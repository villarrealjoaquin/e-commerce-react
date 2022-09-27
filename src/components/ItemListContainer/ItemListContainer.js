import React, {useEffect, useState} from "react"
import { ItemList } from "../ItemList"
import { products } from "../../assets/products"
import { customFetch } from "../../utils/customFetch"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const { IdCategoria } = useParams();
    
    const [listProduct, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        customFetch(products)
            .then(res => {
                if(IdCategoria) {
                    setLoading(false)
                    setListProducts(res.filter(prod => prod.categoria === IdCategoria))
                } else {
                    setLoading(false)
                    setListProducts(res)
                }
            })
     }, [IdCategoria])

    return (
        <>
            <h1 className="h1b">{greeting}</h1>
            {loading ? 
               <div className="spinner">
                <ClipLoader />  
               </div> 
                :
                <ItemList listProduct={listProduct}/> 
            }
        </>
    )
}

    export default ItemListContainer