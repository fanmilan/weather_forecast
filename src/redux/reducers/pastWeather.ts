import {AnyAction} from "redux";
import {Constants, pastWeatherStateType} from "../types/pastWeather";


const initialState = {
    isLoading: false,
    result: null,
    date: null,
    city: null,
    errorDate: null,
    errorRequest: null
}


export const pastWeatherReducer = (state: pastWeatherStateType = initialState, action: AnyAction) => {
    switch (action.type){
        case Constants.GET_DATE_FORECAST_REQUEST:
            return {
                ...state,
                result: null,
                errorRequest: null,
                isLoading: true
            };

        case Constants.GET_DATE_FORECAST_SUCCESS:
            return {
                ...state,
                result: action.payload,
                isLoading: false
            };
        case Constants.GET_DATE_FORECAST_ERROR:
            return {
                ...state,
                result: null,
                errorRequest: action.payload,
                isLoading: false
            };
        case Constants.ADD_DATE_ERROR:
            return {
                ...state,
                result: null,
                errorDate: action.payload,
                isLoading: false
            };
        case Constants.REMOVE_DATE_ERROR:
            return {
                ...state,
                errorDate: null,
            };
        case Constants.CHANGE_DATE:
            return {
                ...state,
                date: action.payload
            };
        case Constants.CHANGE_CITY_FOR_PAST:
            return {
                ...state,
                city: action.payload
            };
        default:
            return state;
    }
}