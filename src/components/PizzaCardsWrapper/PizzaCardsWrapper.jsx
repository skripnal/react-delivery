import styles from './PizzaCardsWrapper.module.scss'

import PizzaCard from '../PizzaCard/PizzaCard'
import { useEffect, useState } from 'react'
import Skeleton from '../PizzaCard/Skeleton'

import axios from 'axios'
import { useSelector } from 'react-redux'

const PizzaCardsWrapper = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { category, sortBy, searchBy } = useSelector(
        (state) => state.filterSlice
    )

    useEffect(() => {
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
    }, [category, sortBy, searchBy])

    return (
        <div className={styles.container}>
            {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                : items.map((item) => <PizzaCard {...item} key={item.id} />)}
        </div>
    )
}

export default PizzaCardsWrapper
