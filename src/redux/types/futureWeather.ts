import {cityType, weatherType} from "./weather";

export type  futureWeatherStateType = {
    isLoading: boolean,
    result: Array<weatherType>,
    city: null | cityType,
    page: number,
    countOnPage: number,
    errorRequest: null | string
}

export enum Constants {
    GET_7_DAYS_FORECAST_REQUEST = 'GET_7_DAYS_FORECAST_REQUEST',
    GET_7_DAYS_FORECAST_SUCCESS = 'GET_7_DAYS_FORECAST_SUCCESS',
    GET_7_DAYS_FORECAST_ERROR   = 'GET_7_DAYS_FORECAST_ERROR',
    CHANGE_CITY_FOR_FUTURE = 'CHANGE_CITY_FOR_FUTURE',
    CHANGE_PAGE = 'CHANGE_PAGE',
}