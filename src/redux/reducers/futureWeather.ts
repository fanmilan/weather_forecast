import {weatherType} from "../types/weather";
import {AnyAction} from "redux";
import {Constants, futureWeatherStateType} from "../types/futureWeather";


const initialValue = {
    isLoading: false,
    result: [],
    city: null,
    page: 0,
    countOnPage: 3,
    errorRequest: null
}

export const futureWeatherReducer = (state: futureWeatherStateType = initialValue, action: AnyAction): futureWeatherStateType => {
    switch (action.type) {
        case Constants.GET_7_DAYS_FORECAST_REQUEST:
            return {
                ...state,
                result:[],
                page: 0,
                isLoading: true,
                errorRequest: null,
            };
        case Constants.GET_7_DAYS_FORECAST_SUCCESS:
            return {
                ...state,
                result: action.payload,
                isLoading: false
            };
        case Constants.GET_7_DAYS_FORECAST_ERROR:
            return {
                ...state,
                result: [],
                errorRequest: action.payload,
                isLoading: false
            };
        case Constants.CHANGE_CITY_FOR_FUTURE:
            return {
                ...state,
                city: action.payload
            }
        case Constants.CHANGE_PAGE:
            return changePage(action.payload, state);
        default:
            return state;
    }
}

const changePage = (newPage: number, state: futureWeatherStateType) => {
    const lastPage = state.result.length - state.countOnPage;
    if (newPage >= 0 && newPage <= lastPage) {
        return {
            ...state,
            page: newPage
        };
    }

    return state;
}