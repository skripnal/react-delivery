import { IoClose } from 'react-icons/io5'

import styles from './CartItem.module.scss'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../../redux/slices/cartSlice'

const CartItem = ({ id, title, price, imageUrl, type, size, count }) => {
    const dispatch = useDispatch()

    const onClickMinus = () => {
        dispatch(minusItem({ id, type, size }))
    }

    const onClickPlus = () => {
        dispatch(addItem({ id, type, size }))
    }

    const onRemoveItem = () => {
        dispatch(removeItem({ id, type, size }))
    }

    return (
        <div className={styles.root}>
            <div className={styles.itemInfo}>
                <img src={imageUrl} alt={'Photo of pizza ' + id} />
                <div>
                    <h2>{title}</h2>
                    <p>{`${type}, ${size}sm.`}</p>
                </div>
            </div>
            <div className={styles.itemControls}>
                <div className={styles.itemCounter}>
                    <button onClick={onClickMinus}>-</button>
                    <p>{count}</p>
                    <button onClick={onClickPlus}>+</button>
                </div>
                <p className={styles.price}>{(price * count).toFixed(2)}$</p>
                <button className={styles.deleteItem} onClick={onRemoveItem}>
                    <IoClose />
                </button>
            </div>
        </div>
    )
}

export default CartItem
