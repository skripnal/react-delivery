import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './CartTotal.module.scss'

const CartTotal = () => {
    const navigate = useNavigate()

    const { totalPrice, items } = useSelector((state) => state.cartSlice)

    const totalCount = items.reduce((sum, item) => {
        return sum + item.count
    }, 0)

    return (
        <div className={styles.root}>
            <div className={styles.total}>
                <p className={styles.counter}>
                    Total pizzas: <span>{totalCount}</span>
                </p>
                <p className={styles.price}>
                    total prise: <span>{totalPrice.toFixed(2)} $</span>
                </p>
            </div>
            <div className={styles.controls}>
                <button onClick={() => navigate(-1)}>
                    <IoIosArrowBack />
                    Go back
                </button>
                <button>Pay now</button>
            </div>
        </div>
    )
}

export default CartTotal
