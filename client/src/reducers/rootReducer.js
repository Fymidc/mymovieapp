import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    movie:movieReducer,
    detail:movieReducer,
    auth:authReducer
})

export default rootReducer;