import { useDispatch } from 'react-redux'
import styles from './SortingPopup.module.scss'
import { setSortBy } from '../../redux/slices/filterSlice'
import { sortList } from '../../enums/data'

const SortingPopup = () => {
    const dispatch = useDispatch()

    return (
        <ul className={styles.container}>
            {sortList.map((el, index) => (
                <li
                    onClick={() => {
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
