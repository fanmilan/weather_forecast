import {AppThunk, cityType} from "../types/weather";
import {Constants} from "../types/pastWeather";
import {getDateForecastApi} from "../../api/weatherApi";
import {
    convertDateToTimestampForWeathermap,
    detectValidDate,
} from "../../common/date";


const changeDate = (date: string) => ({type: Constants.CHANGE_DATE, payload: date});
const changeCity = (city: cityType) => ({type: Constants.CHANGE_CITY_FOR_PAST, payload: city});


const getPastForecastByDateAndCity = (): AppThunk => (dispatch, getState) => {

    const params = getState().pastWeather;

    if (!params.errorDate && params.date && params.city) {
        dispatch({
            type: Constants.GET_DATE_FORECAST_REQUEST
        });

        getDateForecastApi({
            city: params.city,
            date: convertDateToTimestampForWeathermap(params.date, params.city.timezoneOffset)
        })
            .then(res => {
                dispatch({
                    type: Constants.GET_DATE_FORECAST_SUCCESS,
                    payload: res
                });
            })
            .catch((err: Error) => {
                dispatch({
                    type: Constants.GET_DATE_FORECAST_ERROR,
                    payload: err.message
                });
            });
    }
}

export const changeDateAndSend = (date: string): AppThunk => (dispatch) => {

    dispatch(changeDate(date));

    if (detectValidDate(date)) {
        dispatch({type: Constants.REMOVE_DATE_ERROR});
        dispatch(getPastForecastByDateAndCity());
    } else {
        dispatch({
            type: Constants.ADD_DATE_ERROR,
            payload: 'Not valid date.'
        });
    }

}

export const changeCityAndSend = (city: cityType): AppThunk => (dispatch) => {
    dispatch(changeCity(city));

    dispatch(getPastForecastByDateAndCity());
}

