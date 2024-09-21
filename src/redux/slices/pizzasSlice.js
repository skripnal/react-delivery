import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async (params, thunkAPI) => {
        try {
            const res = await axios.get(
                `https://66d9b41e4ad2f6b8ed55b736.mockapi.io/items?search=${params.searchBy}&category=${params.categoryParam}&sortBy=${params.sortBy}&order=desc`
            )
            return thunkAPI.fulfillWithValue(res.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'success'
            console.log(state.items)
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error'
            console.log(action.payload)
        })
    },
})

export const selectPizzaItems = (state) => state.pizzasSlice.items
export const selectPizzaStatus = (state) => state.pizzasSlice.status

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
