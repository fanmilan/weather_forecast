import {useDispatch, useSelector} from "react-redux";
import {Block, ErrorRequest, Filters, Placeholder, Result} from "../../common/components/Block/Block";
import {SelectField} from "../../common/components/SelectField/SelectField";
import {DateField} from "../../common/components/DateField/DateField";
import {WeatherCard} from "../../common/components/WeatherCard/WeatherCard";
import {changeCityAndSend, changeDateAndSend} from "../../redux/actions/pastWeather";
import {rootStateType} from "../../redux/types/weather";


export const PastForecast = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state: rootStateType) => state.pastWeather);

    return <Block title={'Forecast for a Date in the Past'}>
        <Filters>
            <SelectField handleChange={(city) =>  dispatch(changeCityAndSend(city))} city={weather.city}/>
            <DateField handleChange={(date) =>  dispatch(changeDateAndSend(date))} date={weather.date} error={weather.errorDate}/>
        </Filters>
        {
            weather.result ? <Result><WeatherCard weather={weather.result} className={'weather-card_full'} /></Result> : <Placeholder />
        }
        {
            weather.errorRequest && <ErrorRequest text={weather.errorRequest} />
        }
    </Block>
}

