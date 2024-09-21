import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    item: undefined,
    status: 'loading', // loading | success | error
}

export const fetchPizzaById = createAsyncThunk(
    'pizzaInfo/fetchPizzaById',
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(
                `https://66d9b41e4ad2f6b8ed55b736.mockapi.io/items?id=${id}`
            )
            return thunkAPI.fulfillWithValue(res.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const pizzaInfoSlice = createSlice({
    name: 'pizzaInfo',
    initialState,
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload
        },
    },
    extraReducers: (buider) => {
        buider.addCase(fetchPizzaById.pending, (state) => {
            state.item = undefined
            state.status = 'loading'
        })
        buider.addCase(fetchPizzaById.fulfilled, (state, action) => {
            state.item = action.payload[0]
            state.status = 'success'
        })
        buider.addCase(fetchPizzaById.rejected, (state, action) => {
            state.item = undefined
            state.status = 'error'
            console.log(action.payload)
        })
    },
})

export const { setItem } = pizzaInfoSlice.actions

export default pizzaInfoSlice.reducer
