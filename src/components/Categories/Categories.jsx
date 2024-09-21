import { useDispatch, useSelector } from 'react-redux'

import { setCategory } from '../../redux/slices/filterSlice'

import styles from './Categories.module.scss'

import { categoryList } from '../../enums/data'

const Categories = () => {
    const category = useSelector((state) => state.filterSlice.category)
    const dispatch = useDispatch()
    console.log('category render')
    return (
        <div className={styles.categories}>
            <ul>
                {categoryList.map((item, index) => {
                    return category === index ? (
                        <li className={styles.active} key={index}>
                            {item}
                        </li>
                    ) : (
                        <li
                            key={index}
                            onClick={() => dispatch(setCategory(index))}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories
