import { useSelector } from 'react-redux'
import CartItems from '../components/Cart/CartItems/CartItems'
import CartTitile from '../components/Cart/CartTitle/CartTitile'
import CartTotal from '../components/Cart/CartTotal/CartTotal'
import styles from './Cart.module.scss'
import EmptyCart from '../components/Cart/EmptyCart/EmptyCart'

const Cart = () => {
    const items = useSelector((state) => state.cartSlice.items.length)

    return (
        <div className={styles.container}>
            {!!items ? (
                <div>
                    <CartTitile />
                    <CartItems />
                    <CartTotal />
                </div>
            ) : (
                <EmptyCart />
            )}
        </div>
    )
}

export default Cart
