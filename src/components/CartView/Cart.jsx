import React, { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { CartItem } from '../../CartItem/CartItem';
import { Link } from 'react-router-dom'
import { db } from "../../firebase/firebase"
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { CartForm} from "../CartForm/CartForm"


export const Cart = () => {
  const { cart, removeItem, totalPrice, clearCart } = useContext(cartContext);

  const order = {
    buyer:{
      name:'pablo',
      email: 'villarrealjoaquin09@gmail.com',
      phone: '12451345',
      adress: 'alegria siempre viva'
    },
    // items: cart.map(product => ({id: product.id, title: product.name, price: product.price, quantity: product.cantidad})),
  }

  const finalizarCompra = () => {
    // const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, {
      order,
      items:cart,
      date: serverTimestamp(),
      total: totalPrice()
    })
    .then(result => {
      console.log(result.id);
    })
    clearCart();
  }

  return (
    <>
      {cart.length === 0 ? 
      <h1 className='cart-h1'>No se encontraron productos en el carrito, mira los productos desde  <Link to= "/">aca</Link></h1>
      : cart.map((item)=>(
        <CartItem key={item.item.id} item={item} removeItem={removeItem} clearCart={clearCart} totalPrice={totalPrice} finalizarCompra={finalizarCompra}/>
      ))
      }
    </>
  )
}
