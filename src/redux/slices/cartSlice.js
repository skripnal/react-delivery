import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem: (state, action) => {
        //     state.items.push(action.payload)
        //     state.totalPrice = state.items.reduce((sum, current) => {
        //         return sum + current.price
        //     }, 0)
        // },
        addItem: (state, action) => {
            const findItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            )

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }

            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        minusItem: (state, action) => {
            const findItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            )

            if (findItem && findItem.count > 1) {
                findItem.count--
            }

            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        removeItem: (state, action) => {
            const findItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            )

            state.items = state.items.filter((item) => item !== findItem)

            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions

export default cartSlice.reducer
