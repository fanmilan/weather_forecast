import {AppThunk, cityType} from "../types/weather";
import {Constants} from "../types/futureWeather";
import {getFutureForecastApi, handleError} from "../../api/weatherApi";


export const getFutureForecast = (city: cityType): AppThunk => (dispatch) => {

    dispatch({
        type: Constants.CHANGE_CITY_FOR_FUTURE,
        payload: city
    });

    dispatch({
        type: Constants.GET_7_DAYS_FORECAST_REQUEST
    });

    getFutureForecastApi(city)
        .then(res => {
            dispatch({
                type: Constants.GET_7_DAYS_FORECAST_SUCCESS,
                payload: res
            });
        })
        .catch((err: Error) => {
            dispatch({
                type: Constants.GET_7_DAYS_FORECAST_ERROR,
                payload: err.message
            });
        })

}

export const changePage = (page: number) => ({type: Constants.CHANGE_PAGE, payload: page});