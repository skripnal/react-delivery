import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

const findCartItem = (state, payload) => {
    return state.items.find(
        (item) =>
            item.id === payload.id &&
            item.type === payload.type &&
            item.size === payload.size
    )
}

const updateTotalPrice = (state) => {
    return state.items.reduce((sum, item) => {
        return sum + item.price * item.count
    }, 0)
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = findCartItem(state, action.payload)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }
            state.totalPrice = updateTotalPrice(state)
        },
        minusItem: (state, action) => {
            const findItem = findCartItem(state, action.payload)
            if (findItem && findItem.count > 1) {
                findItem.count--
            }
            state.totalPrice = updateTotalPrice(state)
        },
        removeItem: (state, action) => {
            const findItem = findCartItem(state, action.payload)
            state.items = state.items.filter((item) => item !== findItem)
            state.totalPrice = updateTotalPrice(state)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const selectCartGroupItems = (id) => (state) =>
    state.cartSlice.items
        .filter((item) => item.id === id)
        .reduce((sum, item) => {
            return sum + item.count
        }, 0)

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions

export default cartSlice.reducer
