import { combineReducers } from 'redux';
import childReducer from './slices/childSlice';
import genresReducer from './slices/genresSlice';

const rootReducer = combineReducers({
    child: childReducer,
    genres: genresReducer,
});

export default rootReducer;