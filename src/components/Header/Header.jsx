import { TiShoppingCart } from 'react-icons/ti'
import { IoIosSearch } from 'react-icons/io'
import { MdClear } from 'react-icons/md'

import styles from './Header.module.scss'
import icon from '../../assets/pizza-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { setSearchBy } from '../../redux/slices/filterSlice'

const Header = () => {
    const { items, totalPrice } = useSelector((state) => state.cartSlice)

    const totalCount = items.reduce((sum, item) => {
        return sum + item.count
    }, 0)

    const dispatch = useDispatch()

    const inputRef = useRef()

    const [inputValue, setInputValue] = useState('')

    const clearInput = () => {
        setInputValue('')
        testDebounce('')
        inputRef.current.focus()
    }

    const testDebounce = useCallback(
        debounce((str) => {
            dispatch(setSearchBy(str))
            console.log(str)
        }, 200),
        []
    )

    const changeInput = (e) => {
        setInputValue(e.target.value)
        testDebounce(e.target.value)
    }

    return (
        <header className={styles.header}>
            <Link to={'/'}>
                <div className={styles.title}>
                    <img src={icon} alt="" />
                    <div>
                        <h2>Pizza</h2>
                        <p>the most delicious pizza</p>
                    </div>
                </div>
            </Link>
            <div className={styles.search}>
                <IoIosSearch
                    onClick={() => inputRef.current.focus()}
                    className={styles.searchIcon}
                />
                <input
                    ref={inputRef}
                    value={inputValue}
                    type="text"
                    onChange={changeInput}
                    className={styles.input}
                />
                {inputValue && (
                    <MdClear
                        onClick={clearInput}
                        className={styles.clearIcon}
                    />
                )}
            </div>
            <Link to={'/cart'}>
                <div className={styles.cart}>
                    <p>{totalPrice.toFixed(2)} $</p>
                    <div>
                        <TiShoppingCart />
                        <p className={styles.count}>{totalCount}</p>
                    </div>
                </div>
            </Link>
        </header>
    )
}

export default Header
