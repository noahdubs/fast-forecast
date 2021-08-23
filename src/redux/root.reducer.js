import { combineReducers } from "redux"

import userReducer from './user/user.reducer'
import weatherReducer from "./weather/weather.reducer"

export default combineReducers({
    user: userReducer,
    weather: weatherReducer
})