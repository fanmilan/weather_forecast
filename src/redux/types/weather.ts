import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
import {pastWeatherStateType} from "./pastWeather";
import {futureWeatherStateType} from "./futureWeather";


export type rootStateType = {
    pastWeather: pastWeatherStateType,
    futureWeather: futureWeatherStateType
}


export type weatherType = {
    date: string,
    image: string,
    temperature: number,
    active?: boolean
}


export type cityType = {
    name: string,
    coordinates: [number, number],
    timezoneOffset: number
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, rootStateType, unknown, AnyAction>

