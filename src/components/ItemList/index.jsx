import { Item } from "../Item"

const ItemList = ({listProduct}) => {
    
    return (
        <>
            {listProduct.map((prod, i) =>  <Item key={`${prod.nombre}-${i}`} product = {prod}  />)}
        </>
    )
}

export {ItemList}