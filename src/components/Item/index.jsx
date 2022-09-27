import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return(
        <Link to = {`/producto/${product.id}`} className="link-map">
        <div className="product-container">
            <div className="container-shop">
                <img className="img-product" src={product.image} alt="" />
                <h2 className="name-product">{product.nombre}</h2>
                <div className="price">{product.precio}</div>
                <button className="btn-product">Add to Cart</button>
            </div>
        </div>
        </Link>
    )   
}

export {Item}