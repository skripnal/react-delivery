import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalPrice: 0,
    count: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
            state.totalPrice += action.payload.product.price
            state.count++
        },
        clearCart: (state) => {
            state.products = []
            state.totalPrice = 0
            state.count = 0
        },
    },
})

export const { addProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer
