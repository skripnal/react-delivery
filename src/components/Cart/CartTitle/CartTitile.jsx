import { IoCartOutline } from 'react-icons/io5'
import { FaRegTrashAlt } from 'react-icons/fa'

import styles from './CartTitle.module.scss'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/slices/cartSlice'

const CartTitile = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles.root}>
            <h1>
                <IoCartOutline className={styles.cartIcon} />
                Cart
            </h1>
            <button onClick={() => dispatch(clearCart())}>
                <FaRegTrashAlt />
                Clear cart
            </button>
        </div>
    )
}

export default CartTitile
