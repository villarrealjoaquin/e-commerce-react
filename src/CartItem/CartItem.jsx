import React from 'react'

export const CartItem = ({ item, removeItem }) => {

  return (
    <div>
      <img src={item.item.image} alt="" />
      <div>
        <h3>{item.item.name}</h3>
        <p>Precio ${item.item.price}</p>
        <p>Cantidad: {item.cantidad}</p>
        <p>subTotal: {item.item.price * item.cantidad}</p>
        <button onClick={()=>removeItem(item)}>Quitar</button>
      </div>
    </div>
  )
}
