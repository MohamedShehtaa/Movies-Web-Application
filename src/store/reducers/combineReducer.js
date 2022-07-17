import { combineReducers } from "redux";
import movieReducer from "./reducer";
import starReducer from './starStateReducer'

export default combineReducers({
    star: starReducer,
    movies: movieReducer
})