import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {
   const {totalProducts} = useContext(cartContext);

    return (
        <>
            <div className='cart-count'>
                <ShoppingCartIcon  className="cart" color="primary" fontSize="large" />
                <span>{totalProducts() || ''}</span>
            </div>
        </>
    )
}

export default CartWidget