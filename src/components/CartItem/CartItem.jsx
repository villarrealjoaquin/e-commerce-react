import React from 'react'
import "./CartItem.css"

export const CartItem = ( {item, removeItem} ) => {

  return (
    <>
      <div className='cart-container'>
        <div className='cart-items'>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>subTotal: {item.price * item.cantidad}</p>
          <p>Precio: ${item.price}</p>
        </div>
        <button className="button-cart" onClick={() => removeItem(item.id)} >X</button>
      </div>
    </>
  )
}
