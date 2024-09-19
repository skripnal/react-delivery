import { useSelector } from 'react-redux'

import CartItem from '../CartItem/CartItem'
import styles from './CartItems.module.scss'

const CartItems = () => {
    const items = useSelector((state) => state.cartSlice.items)

    return (
        <div className={styles.root}>
            {items.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
    )
}

export default CartItems
