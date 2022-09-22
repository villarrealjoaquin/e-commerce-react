import React from "react";
import { Item } from "../Item";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {

    const onAdd = () => {
        alert(`Se agregaron correctamente los productos a tu carrito `)
    } 

    return(
        <>
        <section className="contenedor-view">
        <div className="title-view">Estas viendo el producto:</div>
            <div className="container-description">
                <section className="container-view">
                <div className="view-image">
                    <img src={item.image} alt=""/>
                </div>
                <div className="product-view">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <ItemCount inicio = {1} stock={5} onAdd={onAdd}/>  
                </div>
                </section>
            </div>
        </section>
        </>
    )
}


export default ItemDetail