import { useDispatch } from 'react-redux'
import styles from './SortingPopup.module.scss'
import { setSortBy } from '../../redux/slices/filterSlice'
import { sortList } from '../../enums/data'
import { useEffect } from 'react'

const SortingPopup = ({ setOpen }) => {
    const dispatch = useDispatch()

    return (
        <ul
            className={styles.container}
            onClick={(event) => event.stopPropagation()}
        >
            {sortList.map((el, index) => (
                <li
                    onClick={() => {
                        setOpen((prev) => !prev)
                        console.log('click on popup')
                        dispatch(setSortBy(el))
                    }}
                    key={index}
                >
                    {el}
                </li>
            ))}
        </ul>
    )
}

export default SortingPopup
