import "./Item.css"
const Item = ({product}) => {

    return(
        <div className="product-container">
            <div className="container-shop">
                <img className="img-product" src={product.image} alt="" />
                <h2 className="name-product">{product.nombre}</h2>
                <div className="price">{product.precio}</div>
                <button class="btn-product">Add to Cart</button>
            </div>
        </div>
    )   
}

export {Item}