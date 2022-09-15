import { Item } from "../Item"

const ItemList = ({listProduct}) => {
    
    return (
        <>
            <div className="map-container">
            {listProduct.map((prod, i) =>  <Item key={`${prod.nombre}-${i}`} product = {prod}  />)}
            </div>
        </>
    )
}

export {ItemList}