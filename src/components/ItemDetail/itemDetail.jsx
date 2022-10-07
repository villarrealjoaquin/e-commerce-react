import React, {useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  
    const [goCart, setGoCart] = useState(false);
    
    const {cart, addProduct} = useContext(cartContext);
    
    const onAdd = (cantidad) => {
        addProduct(item, cantidad);
        setGoCart(true);
    }
    
    console.log(cart);
    return(
        <>
            <section className="contenedor-view">
                <div className="title-view">Estas viendo el producto:</div>
                    <div className="container-description">
                        <div className="container-view">
                            <div className="view-image">
                                <img src={item.image} alt=""/>
                            </div>
                            <div className="product-view">
                                <h3>{item.nombre}</h3>
                                <p>{item.description}</p>
                                {goCart 
                                ? <button className="btn-finalizar">
                                <Link to ='/cart' className="Link-finalizar">Finalizar compra</Link> 
                                </button> 
                                : <ItemCount inicio = {1} stock={5} onAdd={onAdd}/> 
                                } 
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}


export default ItemDetail