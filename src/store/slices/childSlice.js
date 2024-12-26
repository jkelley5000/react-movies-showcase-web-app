import { createSlice } from '@reduxjs/toolkit'

const childSlice = createSlice({
    name: 'child',
    initialState: { data: null },
    reducers: {
        updateData(state, action) {
            state.data = action.payload
        },
        resetData(state) {
            state.data = null
        },
    },
})

export const { updateData, resetData } = childSlice.actions
export default childSlice.reducer
