//import all reducers here
import userReducer from './user_reducer';
import movieReducer from './movie_reducer';


import {combineReducers} from 'redux';


const rootReducer = combineReducers({
    userReducer,
    movieReducer
});

export default rootReducer;
