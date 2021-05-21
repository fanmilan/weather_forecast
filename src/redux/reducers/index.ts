import {combineReducers} from "redux";
import {futureWeatherReducer} from "./futureWeather";
import {pastWeatherReducer} from "./pastWeather";


export const rootReducer = combineReducers({pastWeather: pastWeatherReducer, futureWeather: futureWeatherReducer})