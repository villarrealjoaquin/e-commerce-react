import logo from "../../assets/react-logo.png"
import CartWidget from "../cartWidget/CarWidget"
import "./NavBar.css"

  const NavBar = () => {
    return ( 
        <header>
            <img src= {logo} alt="logo" />
            <h2>React App</h2>
            <nav>
            <a href="#" className="a">Inicio</a>
            <a href="#" className="a">Sobre nosotros</a>
            <a href="#" className="a">Servicio</a>
            <a href="#" className="a">Novedades</a>
            <a href="#" className="a">Contacto</a>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar


