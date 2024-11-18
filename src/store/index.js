import { configureStore } from '@reduxjs/toolkit';
import childReducer from './childSlice';

const store = configureStore({
    reducer: {
        child: childReducer,
    },
});

export default store;
