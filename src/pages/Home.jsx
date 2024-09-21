import styles from './Home.module.scss'

import Sorting from '../components/Sorting/Sorting'
import Categories from '../components/Categories/Categories'
import PizzaCardsWrapper from '../components/PizzaCardsWrapper/PizzaCardsWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { categoryList } from '../enums/data'
import { useEffect, useRef } from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { setFilters } from '../redux/slices/filterSlice'

const Home = () => {
    const category = useSelector((state) => state.filterSlice.category)
    const sortBy = useSelector((state) => state.filterSlice.sortBy)
    const navigate = useNavigate()

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) {
            const categoryid = category ? category : ''
            const queryStr = qs.stringify({
                category: categoryid,
                sortBy,
                order: 'desc',
            })
            navigate(`?${queryStr}`)
            console.log(`?${queryStr}`)
        }
        isMounted.current = true
    }, [category, sortBy])

    return (
        <div className={styles.container}>
            <div className={styles.categorySort}>
                <Categories />
                <Sorting />
            </div>
            <h2 className={styles.title}>{categoryList[category]} pizzas</h2>
            <PizzaCardsWrapper />
        </div>
    )
}

export default Home
