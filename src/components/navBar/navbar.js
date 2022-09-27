import logo from "../../assets/react-logo.png"
import CartWidget from "../cartWidget/CarWidget"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

  const NavBar = () => {
    return ( 
        <header>
            <Link to='/' className="link-h2">
                <img  src= {logo} alt="logo" />
                <h2 className="h2">Manga Shop</h2>
            </Link>
            <nav>
                <NavLink to="/" className="a">Inicio</NavLink>
                <NavLink to="/categoria/shonen" className="a">shonen</NavLink>
                <NavLink to="/categoria/seinen" className="a">seinen</NavLink>
                <NavLink to="/categoria/isekai" className="a">isekai</NavLink>
                <NavLink to="/categoria/contacto" className="a">contacto</NavLink>
            </nav>
            <Link to = "/cart">
                <CartWidget />
            </Link>
        </header>
    )
}

export default NavBar
 

