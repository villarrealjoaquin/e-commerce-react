import NavBar from  "./components/navBar/navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import MiComponente from "./MiComponente"
import Usuarios from "./Usuarios.js"
import { useState } from "react"

const App = () => {
  
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenido a mi App"}/>
    </>
  )
}

export default App


