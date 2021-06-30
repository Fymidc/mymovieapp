import { combineReducers } from 'redux';
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
    movie:movieReducer,
    detail:movieReducer

})

export default rootReducer;