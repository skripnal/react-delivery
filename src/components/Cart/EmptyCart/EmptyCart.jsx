import React from 'react'

import styels from './EmptyCart.module.scss'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
    const navigate = useNavigate()
    return (
        <div className={styels.wrapper}>
            <h1 className={styels.title}>Cart is emtpy</h1>
            <p className={styels.subtitle}>
                return to the main page to buy pizza
            </p>
            <button onClick={() => navigate(-1)}>Return back</button>
        </div>
    )
}

export default EmptyCart
