import React, {useContext, useState}from 'react'
import "./CartForm.css"
import { cartContext } from '../../Context/CartContext'
import { db } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
import { Link } from 'react-router-dom'

export const CartForm = () => {

  const {cart, totalPrice, clearCart} = useContext(cartContext);
  const [confirm, setConfirm] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [dataClient, setDataClient] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono:''
  })

  const datosComprador = (e) => {
    const { name, value } = e.target
    setDataClient({
      ...dataClient, [name] : value
    })
  }


  const finalizarCompra = () => {
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, {
      dataClient,
      items:cart,
      date: serverTimestamp(),
      total: totalPrice()
    })
    .then(result => {
      setOrderId(result.id);
      cart.forEach(products => {
        updateStock(products)
      });
    })
  
    clearCart();
    setConfirm(false);
  }


  const updateStock = (products) => {
    const uStock = doc(db, "products", products.id)
      updateDoc(uStock, {stock:(products.stock - products.cantidad)})
  }

  return(
    <>
      {confirm 
      ? 
      <>
          <h1 className='cart-form-h1'>Antes de finalizar con la compra, Ingrese sus datos</h1>
          <form onSubmit={finalizarCompra} onChange={datosComprador} className='cart-form'  >
            <input onChange={datosComprador} type="text" name='nombre' value={dataClient.nombre} placeholder='Escribe tu Nombre' required = {true}></input>
            <input onChange={datosComprador} type="text" name='apellido' placeholder='Escribe tu Apellido' required = {true}></input>
            <input onChange={datosComprador} type="email" name='email' placeholder='Ingresa tu Correo' required = {true}></input>
            <input onChange={datosComprador} type="email" name='email' placeholder='Repetir tu Correo' required = {true}></input>
            <input onChange={datosComprador} type="text" name= 'telefono' placeholder='Ingresa direccion' required = {true}/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Deja algun comentario de como queres que llege el producto (Opcional)'></textarea>
            <button type='submit' onClick={finalizarCompra}>Confirmar</button>
          </form>
        </>
      : 
      <div className='idUser'>
        <h1>{dataClient.nombre} Gracias por su compra!</h1>
        <h2>Su orden de compra: {orderId}</h2>
        <p>En caso de tener algun problema con el producto, comunicarse con soporte y pasar su orden de compra para poder solucionar su problemas lo antes posible!</p>
      <Link to='/' ><button className='btn-user'>Volver</button></Link>
      </div>
    } 
  </>
  
  )
}
