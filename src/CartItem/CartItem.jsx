import React from 'react'
import "./CartItem.css"
import { Link } from 'react-router-dom'

export const CartItem = ({ item, removeItem, totalPrice, clearCart, finalizarCompra }) => {

  return (
    <>
      <div className='cart-container'>
        <div className='cart-items'>
          <img src={item.item.image} alt="" />
          <p>{item.item.name}</p>
          <p>Cantidad: 1 {item.item.cantidad}</p>
          <p>Precio: ${item.item.price}</p>
          <p>subTotal: {item.item.price * item.cantidad}</p>
        </div>
        <button onClick={()=>removeItem(item)} className="button-cart">❌</button>
      </div>
      <p>total: ${totalPrice()}</p>
      <button onClick={()=> clearCart()}>Vaciar Carrito</button>
      <Link to="/CartForm"><button onClick={finalizarCompra}>Emitir compra</button></Link> 
    </>
  )
}
