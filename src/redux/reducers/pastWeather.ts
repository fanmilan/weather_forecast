import {Constants, pastWeatherStateType} from "../types/weather";
import {AnyAction} from "redux";


const initialState = {
    isLoading: false,
    result: null,
    date: null,
    city: null
}


export const pastWeatherReducer = (state: pastWeatherStateType = initialState, action: AnyAction) => {
    switch (action.type){
        case Constants.GET_DATE_FORECAST_SUCCESS:
            return {
                ...state,
                result: action.payload
            };
        case Constants.CHANGE_DATE:
            return {
                ...state,
                date: action.payload
            };
        case Constants.CHANGE_CITY:
            return {
                ...state,
                city: action.payload
            };
        default:
            return state;
    }
}