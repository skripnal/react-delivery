import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem'
import styles from './CartItems.module.scss'

const CartItems = () => {
    const products = useSelector((state) => state.cartSlice.products)
    //TODO: зробити нормальне відображення з перевіркою дублювання карточки
    return (
        <div className={styles.root}>
            {products.map((item) => (
                <CartItem />
            ))}
        </div>
    )
}

export default CartItems
