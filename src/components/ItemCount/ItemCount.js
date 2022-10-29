import React, {useState} from "react";
import './ItemCount.css'

const ItemCount = ({inicio, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicio);  
    
    const suma = () => cantidad < stock && setCantidad(cantidad + 1)
    const resta = () => cantidad > inicio && setCantidad( cantidad - 1)
    
    return(
        <>
        <div className="container-btn">
          <div className="main-btn-container">
            <button href="#" className=" btn-color-1" onClick={resta}>-</button>
            <h2 className="linea">{cantidad}</h2>
            <button href="#"  className=" btn-color-2" onClick={suma} >+</button>
          </div>
        </div>
        <div className="btn-carrito">
          <button className="btn-cart" onClick={()=>onAdd(cantidad)}>Add to Cart</button>
        </div> 
        </>  
    )
}

export default ItemCount