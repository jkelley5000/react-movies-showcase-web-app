import { createSlice } from '@reduxjs/toolkit'

const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        data: [
            'Action',
            'Adventure',
            'Comedy',
            'Drama',
        ]
    },
    reducers: {
        updateGenres(state, action) {
            state.data = action.payload
        },
        resetGenres(state) {
            state.data = null
        },
    },
})

export const { updateGenres, resetGenres } = genresSlice.actions
export default genresSlice.reducer