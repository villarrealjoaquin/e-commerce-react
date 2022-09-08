import NavBar from  "./components/navBar/navbar.js"
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer.js"

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenido a mi App"}/>
    </>
  )
}

export default App


