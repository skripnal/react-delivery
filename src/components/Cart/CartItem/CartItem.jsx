import { IoClose } from 'react-icons/io5'

import styles from './CartItem.module.scss'

const CartItem = ({}) => {
    return (
        <div className={styles.root}>
            <div className={styles.itemInfo}>
                <img
                    src="https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1725543902~exp=1725547502~hmac=a70ff16104c0309362009253650cf9388591a93fc7dcd0b92676c0af6d775b9c&w=1480"
                    alt=""
                />
                <div>
                    <h2>Cheese pizza</h2>
                    <p>some description</p>
                </div>
            </div>
            <div className={styles.itemControls}>
                <div className={styles.itemCounter}>
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                </div>
                <p className={styles.price}>20$</p>
                <button className={styles.deleteItem}>
                    <IoClose />
                </button>
            </div>
        </div>
    )
}

export default CartItem
