import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import pizzasSlice from './slices/pizzasSlice'
import pizzaInfoSlice from './slices/pizzaInfoSlice'

export const store = configureStore({
    reducer: { filterSlice, cartSlice, pizzasSlice, pizzaInfoSlice },
})
