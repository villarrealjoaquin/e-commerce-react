import React from "react"
import ItemCount from "../../ItemCount/ItemCount"

const ItemListContainer = ({greeting, cantidad}) => {
    const onAdd = () => {
        alert(`Se agregaron correctamente los productos a tu carrito `)
    }

    return (
        <>
        <h1 className="h1b">{greeting}</h1>
        <ItemCount inicio = {1} stock={5} onAdd={onAdd}/>
        </>
    )
}

export default ItemListContainer