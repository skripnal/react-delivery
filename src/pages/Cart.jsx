import CartItems from '../components/Cart/CartItems/CartItems'
import CartTitile from '../components/Cart/CartTitle/CartTitile'
import CartTotal from '../components/Cart/CartTotal/CartTotal'
import styles from './Cart.module.scss'

const Cart = () => {
    return (
        <div className={styles.container}>
            <CartTitile />
            <CartItems />
            <CartTotal />
        </div>
    )
}

export default Cart
