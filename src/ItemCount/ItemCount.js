import React, {useState} from "react";

const ItemCount = ({inicio, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicio);  
    
    const suma = () => cantidad < stock && setCantidad(cantidad + 1)
    const resta = () => cantidad > inicio && setCantidad( cantidad - 1)
    
    return(
        <>
        <div className="container">
        <div className="main-container">
          <a href="#" className="btn btn-color" onClick={suma}>+</a>
          <h2 className="linea">{cantidad}</h2>
          <a href="#"  className="btn btn-color" onClick={resta} >-</a>
        </div>
        </div>
        <div className="btn-carrito">
          <a href="#" className="btn-cart" onClick={onAdd}>Add to Cart</a>
        </div> 
        </>  
    )
}

export default ItemCount