import styles from './Home.module.scss'

import Sorting from '../components/Sorting/Sorting'
import Categories from '../components/Categories/Categories'
import PizzaCardsWrapper from '../components/PizzaCardsWrapper/PizzaCardsWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { categoryList } from '../enums/data'
import { useEffect } from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { setFilters } from '../redux/slices/filterSlice'

const Home = () => {
    const { category, sortBy } = useSelector((state) => state.filterSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params))
        }
    }, [])

    useEffect(() => {
        const categoryid = category ? category : ''
        const queryStr = qs.stringify({
            category: categoryid,
            sortBy,
            order: 'desc',
        })
        navigate(`?${queryStr}`)
        console.log(`?${queryStr}`)
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
