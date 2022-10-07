import React, {useState} from "react";

const ItemCount = ({inicio, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicio);  
    
    const suma = () => cantidad < stock && setCantidad(cantidad + 1)
    const resta = () => cantidad > inicio && setCantidad( cantidad - 1)
    
    return(
        <>
        <div className="container">
          <div className="main-container">
            <button href="#" className="btn btn-color" onClick={suma}>+</button>
            <h2 className="linea">{cantidad}</h2>
            <button href="#"  className="btn btn-color" onClick={resta} >-</button>
          </div>
        </div>
        <div className="btn-carrito">
          <button href="#" className="btn-cart" onClick={()=>onAdd(cantidad)}>Add to Cart</button>
        </div> 
        </>  
    )
}

export default ItemCount