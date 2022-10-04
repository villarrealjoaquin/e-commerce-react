import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { CartItem } from '../../CartItem/CartItem';

export const Cart = () => {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <>
    <div>Cart</div>
    {cart ? cart.map(({item})=>(
      <CartItem key={item.id} item={item} removeItem={removeItem} />
    ))
    : "vacio"}
    </>
  )
}
