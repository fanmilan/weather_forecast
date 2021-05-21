import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

export type  futureWeatherStateType = {
    isLoading: boolean,
    result: Array<weatherType>,
    city: null | cityType,
    page: number,
    countOnPage: number
}

export type pastWeatherStateType = {
    isLoading: boolean,
    result: null | weatherType,
    date: null | number,
    city: null | cityType
}

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

export type weatherStoreType = {
    isLoading: boolean,
    result: Array<weatherType>,
    weatherByDate: null | weatherType
}

export enum Constants {
    'GET_7_DAYS_FORECAST_REQUEST' = 'GET_7_DAYS_FORECAST_REQUEST',
    'GET_7_DAYS_FORECAST_SUCCESS' = 'GET_7_DAYS_FORECAST_SUCCESS',
    'GET_7_DAYS_FORECAST_ERROR'   = 'GET_7_DAYS_FORECAST_ERROR',

    'GET_DATE_FORECAST_REQUEST' = 'GET_DATE_FORECAST_REQUEST',
    'GET_DATE_FORECAST_SUCCESS' = 'GET_DATE_FORECAST_SUCCESS',
    'GET_DATE_FORECAST_ERROR'   = 'GET_DATE_FORECAST_ERROR',

    'CHANGE_DATE' = 'CHANGE_DATE',
    'CHANGE_CITY' = 'CHANGE_CITY',

    CHANGE_PAGE = 'CHANGE_PAGE',
}


export type cityType = {
    name: string,
    coordinates: [number, number]
}

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, rootStateType, unknown, AnyAction>

