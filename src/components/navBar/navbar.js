import CartWidget from "../cartWidget/CarWidget"
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

  const NavBar = () => {
    return ( 
        <header class="container-nav-bar">
        <div class="header-top-info">
            <p>10% En compras superiores a 5000$!</p> 
        </div>
        <div class="nav-bar">
            <div class="nav-bar-left">
               <Link to="/" className="nav-bar-inicio"><h3>Mugiwara Shop</h3></Link> 
            </div>
            <div class="nav-bar-center">
                <NavLink to="/">INICIO</NavLink>
                <NavLink to="/categoria/jovenes" >JOVENES</NavLink>
                <NavLink to="/categoria/comedia">COMEDIA</NavLink>
                <NavLink to="/categoria/deportes">DEPORTES</NavLink>
            </div>
            <div class="nav-bar-right">
            <Link to = "/cart" className="link-cartWidget">
                <CartWidget />
            </Link>
            </div>
        </div>
    </header>

    )

}

export default NavBar
 

