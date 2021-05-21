import {AppThunk, cityType, Constants} from "../types/weather";
import {getFutureForecastApi} from "../../api/weatherApi";



export const getFutureForecast = (city: cityType): AppThunk => (dispatch) => {

    dispatch({
        type: Constants.CHANGE_CITY,
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
        .catch()
}

export const changePage = (page: number) => ({type: Constants.CHANGE_PAGE, payload: page});