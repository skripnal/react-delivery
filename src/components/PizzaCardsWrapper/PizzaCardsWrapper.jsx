import styles from './PizzaCardsWrapper.module.scss'

import PizzaCard from '../PizzaCard/PizzaCard'
import { useEffect, useRef, useState } from 'react'
import Skeleton from '../PizzaCard/Skeleton'
import qs from 'qs'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../redux/slices/filterSlice'

const PizzaCardsWrapper = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { category, sortBy, searchBy, order } = useSelector(
        (state) => state.filterSlice
    )
    const dispatch = useDispatch()

    function fetchPizzas() {
        setIsLoading(true)

        const categoryParam = category ? category : ''

        axios
            .get(
                `https://66d9b41e4ad2f6b8ed55b736.mockapi.io/items?search=${searchBy}&category=${categoryParam}&sortBy=${sortBy}&order=desc`
            )
            .then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params))
            console.log(params)
        }
    }, [])

    useEffect(() => {
        fetchPizzas()
    }, [category, sortBy, searchBy, order])

    return (
        <div className={styles.container}>
            {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((item) => <PizzaCard {...item} key={item.id} />)}
        </div>
    )
}

export default PizzaCardsWrapper
