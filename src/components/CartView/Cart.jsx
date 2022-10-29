import React, { useContext } from 'react'
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext';


export const Cart = () => {

  const { cart, removeItem, clearCart, totalPrice } = useContext(cartContext);

  return (
    <>
      {cart.length !== 0 ? 
       cart.map((item)=>(
         <CartItem key={item.id} item={item} removeItem={removeItem} />
       ))
      : <div className='empty-cart'>
        <p>No se encontraron producto en el carrito!</p>      
       <Link to="/" className='btn-empty'><button >Volver</button></Link> 
      </div>
      }

    {cart.length !== 0 &&
      <div className='button-cart-container'>
        <Link to = "/cartForm"><button>Finalizar compra</button></Link> 
        <Link to="/" className='link-cart-container'><button>Agregar mas productos!</button></Link>
        <button onClick={()=> clearCart()}>Vaciar Carrito</button>
        <p>total:${totalPrice()}</p>
      </div>
    }
    </>
  )
}
