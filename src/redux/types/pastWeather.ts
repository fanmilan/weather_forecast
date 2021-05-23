import {cityType, weatherType} from "./weather";

export type pastWeatherStateType = {
    isLoading: boolean,
    result: null | weatherType,
    date: null | string,
    city: null | cityType,
    errorDate: null | string,
    errorRequest: null | string
}

export enum Constants {
    GET_DATE_FORECAST_REQUEST = 'GET_DATE_FORECAST_REQUEST',
    GET_DATE_FORECAST_SUCCESS = 'GET_DATE_FORECAST_SUCCESS',
    GET_DATE_FORECAST_ERROR = 'GET_DATE_FORECAST_ERROR',
    CHANGE_DATE = 'CHANGE_DATE',
    CHANGE_CITY_FOR_PAST = 'CHANGE_CITY_FOR_PAST',
    ADD_DATE_ERROR   = 'ADD_DATE_ERROR',
    REMOVE_DATE_ERROR = 'REMOVE_DATE_ERROR',
}