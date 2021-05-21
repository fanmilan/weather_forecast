import {Constants, futureWeatherStateType, weatherType} from "../types/weather";
import {AnyAction} from "redux";


const initialValue = {
    isLoading: false,
    result: [],
    city: null,
    page: 0,
    countOnPage: 3,
}


export const futureWeatherReducer = (state: futureWeatherStateType = initialValue, action: AnyAction): futureWeatherStateType => {
    switch (action.type) {
        case Constants.GET_7_DAYS_FORECAST_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_7_DAYS_FORECAST_SUCCESS:
            return {
                ...state,
                result: action.payload,
                isLoading: false
            };
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