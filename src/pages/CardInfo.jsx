import { useParams } from 'react-router-dom'
import styles from './CardInfo.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzaById } from '../redux/slices/pizzaInfoSlice'
import { useEffect } from 'react'

const CardInfo = () => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPizzaById(params.id))
    }, [])
    const item = useSelector((state) => state.pizzaInfoSlice.item)
    return <div className={styles.wrapper}>CardInfo abot {params.id}</div>
}

export default CardInfo
