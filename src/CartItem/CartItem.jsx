import React from 'react'


export const CartItem = ({item, removeItem, }) => {

  return (
    <div>
      <img src={item.item.image} alt="" />
      <div>
        <h3>{item.nombre}</h3>
        <p>Precio ${item.item.precio}</p>
        <p>Cantidad: {item.cantidad}</p>
        <p>subTotal: {item.item.precio * item.cantidad}</p>
        <button onClick={() => removeItem(item)}>Quitar</button>
      </div>
    </div>
  )
}
