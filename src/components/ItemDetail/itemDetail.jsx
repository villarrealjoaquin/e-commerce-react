import React, {useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  
    const [goCart, setGoCart] = useState(false);
    
    const { addProduct} = useContext(cartContext);
    
    const onAdd = (cantidad) => {
        addProduct(item, cantidad);
        setGoCart(true);
    }
    
    return(
        <>
            <div className="data-description">
                <ul className="ul-data-description">
                    <li><Link to = "/">inicio</Link></li>
                    <li> <Link to = "/">Mangas</Link></li>
                    <li>{item.category}</li>
                    <li>{item.name}</li>
                </ul>
            </div>
            <div className="data-info-container">
                <div className="data-info">
                    Estas viendo
                </div>
            </div>
            <div className="container-view-description">
                <div className="view-description-left">
                    <img src={item.image} alt="imagen de producto" />
                </div>
                <div className="view-description-right">
                    <h2 className="view-description-right-h2">{item.name}</h2>
                    <p>{item.description}</p>
                {goCart ? 
                <button className="btn-finalizar">
                    <Link to ='/cart' className="Link-finalizar">Finalizar compra</Link> 
                </button> 
                : <ItemCount inicio = {1} stock={item.stock} onAdd={onAdd} />} 
                </div>
            </div>
        </>
    )
}


export default ItemDetail