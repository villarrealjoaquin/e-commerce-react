import NavBar from  "./components/navBar/navbar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/index.jsx"

const App = () => {
  
  return (
    <>
    <NavBar />
    <ItemDetailContainer />
    <ItemListContainer greeting={"Bienvenido a mi App"}/>
    </>
  )
}

export default App


