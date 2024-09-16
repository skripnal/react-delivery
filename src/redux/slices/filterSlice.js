import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: 0,
    sortBy: 'popular',
    searchBy: '',
    order: 'desc',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        setSearchBy: (state, action) => {
            state.searchBy = action.payload
        },
        setFilters: (state, action) => {
            state.category = Number(action.payload.category)
            state.sortBy = action.payload.sortBy
            state.order = action.payload.order
        },
    },
})

export const { setCategory, setSortBy, setSearchBy, setFilters } =
    filterSlice.actions

export default filterSlice.reducer
