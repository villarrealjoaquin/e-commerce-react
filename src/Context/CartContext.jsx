import React, { useState } from 'react'
import { createContext } from "react";

export const cartContext = createContext();

 const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
      const findItem = cart.findIndex(item => item.item.id === item.id)
      if (findItem !== -1) {
       const newCart = cart.filter(item => item !== cart[findItem])
       setCart([{item, quantity}, ...newCart])
      } else{
        setCart([...cart, {item,quantity}])
     }
    }

    const removeItem = (item) => {
        const newCart = cart.filter(products => products.item !== item)
        setCart([...newCart])
    }

    const clear = () => {
        setCart([])
    }

  return (
    <cartContext.Provider value={{cart, addItem, removeItem,clear }}>{children}</cartContext.Provider>
  )
}

export default CartProvider

