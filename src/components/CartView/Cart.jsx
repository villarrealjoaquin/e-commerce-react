import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { CartItem } from '../../CartItem/CartItem';
import { Link } from '@mui/icons-material';

export const Cart = () => {
  const { cart, removeItem, totalPrice} = useContext(cartContext);

  return (
    <>
    {cart.length === 0 ? 
    <h1 className='cart-h1'>No se encontraron productos en el carrito, mira los productos desde  <Link to= "/">aca</Link></h1>
    : cart.map((item)=>(
       <CartItem key={item.item.id} item={item} removeItem={removeItem} />
    ))}
    <p>total ${totalPrice()}</p>
    </>
  )
}
