import React from 'react'

export const CartItem = ({item, removeItem}) => {
  return (
    <>
    <h1>{item.nombre}</h1>
    <button onClick={() => removeItem(item)}>Quitar</button>
    </>
  )
}
