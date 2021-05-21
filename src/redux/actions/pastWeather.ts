import {AppThunk, cityType, Constants} from "../types/weather";
import {getDateForecastApi} from "../../api/weatherApi";


const changeDate = (date: number) => ({type: Constants.CHANGE_DATE, payload: date});
const changeCity = (city: cityType) => ({type: Constants.CHANGE_CITY, payload: city});


const getPastForecastByDateAndCity = (): AppThunk => (dispatch, getState) => {

    const params = getState().pastWeather;

    if (params.date && params.city) {
        dispatch({
            type: Constants.GET_DATE_FORECAST_REQUEST
        });

        getDateForecastApi({city: params.city, date: params.date})
            .then(res => {
                dispatch({
                    type: Constants.GET_DATE_FORECAST_SUCCESS,
                    payload: res
                });
            }).catch();
    }
}

export const changeDateAndSend = (date: number): AppThunk => (dispatch) => {


    dispatch(changeDate(date));

    dispatch(getPastForecastByDateAndCity());

    //Check new Date...

    //check city
}

export const changeCityAndSend = (city: cityType): AppThunk => (dispatch) => {
    dispatch(changeCity(city));

    dispatch(getPastForecastByDateAndCity());
}
