import NavBar from  "./components/navBar/navbar.js"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer.js"
import MiComponente from "./MiComponente"
import Usuarios from "./Usuarios.js"
import ItemCount from "./ItemCount/ItemCount"

const App = () => {
  
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenido a mi App"}/>
    {/* <MiComponente /> */}
    {/* <Usuarios /> */}
    </>
  )
}

export default App


