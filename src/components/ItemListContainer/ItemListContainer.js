import React, {useEffect, useState} from "react"
// import ItemCount from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList"
import { products } from "../../assets/products"
import { customFetch } from "../../utils/customFetch"
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [])

       

    return (
        <>
            <h1 className="h1b">{greeting}</h1>
            {loading ? 
                <ClipLoader />  
                :
                <ItemList listProduct={listProduct}/>
            }
            {/* <ItemCount inicio = {1} stock={5} onAdd={onAdd}/>          */}
        </>
    )
}

    export default ItemListContainer