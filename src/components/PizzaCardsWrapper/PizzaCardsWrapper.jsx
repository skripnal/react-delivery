import styles from './PizzaCardsWrapper.module.scss'

import PizzaCard from '../PizzaCard/PizzaCard'
import { useEffect } from 'react'
import Skeleton from '../PizzaCard/Skeleton'
import qs from 'qs'

import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../redux/slices/filterSlice'
import {
    fetchPizzas,
    selectPizzaItems,
    selectPizzaStatus,
} from '../../redux/slices/pizzasSlice'
import { useLocation } from 'react-router-dom'

const PizzaCardsWrapper = () => {
    const items = useSelector(selectPizzaItems)
    const status = useSelector(selectPizzaStatus)

    const { category, sortBy, searchBy, order } = useSelector(
        (state) => state.filterSlice
    )
    const dispatch = useDispatch()

    function getPizzas() {
        const categoryParam = category ? category : ''
        dispatch(fetchPizzas({ categoryParam, sortBy, searchBy }))
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params))
            console.log(params)
        }
    }, [])

    useEffect(() => {
        getPizzas()
    }, [category, sortBy, searchBy, order])

    return (
        <div className={styles.container}>
            {status === 'loading' &&
                [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
            {status === 'success' &&
                items?.map((item) => <PizzaCard {...item} key={item.id} />)}
            {status === 'error' && <div>Error</div>}
        </div>
    )
}

export default PizzaCardsWrapper
