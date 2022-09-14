import React, {useEffect, useState} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList"
import { products } from "../../assets/products"
import { customFetch } from "../../utils/customFetch"

const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProducts] = useState([])

    useEffect(()=> {
        customFetch(products)
            .then(res => setListProducts(res))
    }, [])

    const onAdd = () => {
        alert(`Se agregaron correctamente los productos a tu carrito `)
    } 

    return (
        <>
            <h1 className="h1b">{greeting}</h1>
            {/* <ItemCount inicio = {1} stock={5} onAdd={onAdd}/> */}
            <ItemList listProduct={listProduct}/>
        </>
    )
}

export default ItemListContainer