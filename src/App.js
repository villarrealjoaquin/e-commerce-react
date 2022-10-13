import NavBar from  "./components/navBar/navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/index.jsx"
import { Cart } from "./components/CartView/Cart"
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import  CartProvider  from "./Context/CartContext.jsx";
import { CartForm } from "./components/CartForm/CartForm.jsx";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos"}/>} />
            <Route path="/categoria/:IdCategoria" element= { <ItemListContainer greeting={"Bienvenidos"}/>} />
            <Route path="/producto/:id" element = {<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/cartform" element= {<CartForm />} />
          </Routes> 
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App


