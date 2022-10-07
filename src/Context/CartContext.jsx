import React, { useState } from 'react'
import { createContext } from "react";

export const cartContext = createContext();

 const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    console.log(cart);
    
    const addProduct = (item, cantidad) => {
      if(inInCart(item.id)){
        setCart(cart.map(product => {
          return product.id === item.id ? {...product, cantidad: product.cantidad + cantidad} : product
        }))
      } else {
        setCart([...cart, {item, cantidad}]);
      }
      console.log(item.cantidad);
      
    }

    const inInCart = (id) => cart.find(product => product.item.id === id) ? true : false;

    const removeItem = (item) => {
        const newCart = cart.filter(products => products.item !== item)
        setCart([...newCart])
    }

    const clearCart = () => setCart([])

    const totalPrice = () => {
      return cart.reduce((prev,act)=> prev + act.cantidad * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.cantidad, 0); 

  return (
    <cartContext.Provider value={{cart, addProduct,inInCart, removeItem,clearCart,totalPrice,totalProducts}}>{children}</cartContext.Provider>
  )
}

export default CartProvider

