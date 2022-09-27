import NavBar from  "./components/navBar/navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/index.jsx"
import { Cart } from "./CartView/Cart"
import { BrowserRouter, Routes,Route, } from "react-router-dom";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos"}/>} />
          <Route path="/categoria/:IdCategoria" element= { <ItemListContainer greeting={"Bienvenidos"}/>} />
          <Route path="/producto/:id" element = {<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes> 
      </BrowserRouter>
      {/* <ItemDetailContainer /> */}
    </>
  )
}

export default App


