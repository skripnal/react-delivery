import { useState } from 'react'
import styles from './PizzaCard.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'

const PizzaCard = ({ id, title, price, imageUrl, sizes, types }) => {
    const [curentType, setCurentType] = useState(types[0])
    const [curentSize, setCurentSize] = useState(sizes[0])

    const dispatch = useDispatch()

    const count = useSelector((state) =>
        state.cartSlice.items
            .filter((item) => item.id === id)
            .reduce((sum, item) => {
                return sum + item.count
            }, 0)
    )

    const addToCart = () => {
        dispatch(
            addItem({
                id,
                title,
                price,
                imageUrl,
                type: curentType,
                size: curentSize,
            })
        )
    }

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt="" />
            <h2>{title}</h2>
            <div className={styles.options}>
                <ul>
                    {types.map((type) =>
                        curentType === type ? (
                            <li
                                className={styles.active}
                                key={type}
                                onClick={() => setCurentType(type)}
                            >
                                {type}
                            </li>
                        ) : (
                            <li key={type} onClick={() => setCurentType(type)}>
                                {type}
                            </li>
                        )
                    )}
                </ul>
                <ul>
                    {sizes.map((size) =>
                        curentSize === size ? (
                            <li
                                className={styles.active}
                                key={size}
                                onClick={() => setCurentSize(size)}
                            >
                                {size} sm.
                            </li>
                        ) : (
                            <li key={size} onClick={() => setCurentSize(size)}>
                                {size} sm.
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className={styles.order}>
                <p>{price.toFixed(2)} $</p>
                <button onClick={addToCart}>
                    <span>+</span> Add to cart
                    {!!count && <p className={styles.counter}>{count}</p>}
                </button>
            </div>
        </div>
    )
}

export default PizzaCard
