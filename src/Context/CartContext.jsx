import React, { useState } from 'react'
import { createContext } from "react";

export const cartContext = createContext();
 const CartProvider = ({ children }) => {
   
   const [cart, setCart] = useState( [] );
   
   const inInCart = (id) => cart.find(product => product.id === id) ? true : false;

   const addProduct = (item, cantidad) => {
     if(inInCart(item.id)){
        setCart(cart.map(product => {
          return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product;
        }))
      } else {
        setCart([...cart, {...item, cantidad}]);
      }
    }

    const clearCart = () => setCart([])

    const removeItem = (id) => {
      const arrayBorrado = cart.filter((item) => {
          return item.id !== id
      })
      setCart(arrayBorrado)
  }
    
    const totalPrice = () => {
      return cart.reduce((prev, act)=> prev + act.cantidad * act.price, 0)
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.cantidad, 0); 
 
  return (
    <cartContext.Provider value={{
      addProduct,
      removeItem,
      inInCart, 
      clearCart,
      totalPrice,
      totalProducts,
      cart}}
      >
        {children}
      </cartContext.Provider>
  )
}

export default CartProvider

