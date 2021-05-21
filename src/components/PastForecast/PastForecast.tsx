import {useDispatch, useSelector} from "react-redux";
import {Block, Filters, Placeholder, Result} from "../../common/components/Block/Block";
import {SelectField} from "../../common/components/SelectField/SelectField";
import {DateField} from "../../common/components/DateField/DateField";
import {weatherType} from "../../redux/types/weather";
import {WeatherCard} from "../../common/components/WeatherCard/WeatherCard";
import {changeCityAndSend, changeDateAndSend} from "../../redux/actions/pastWeather";
import {useAppDispatch, useAppSelector} from "../../app/hooks";


export const PastForecast = () => {
    const dispatch = useDispatch();
    const weather = useAppSelector((state) => state.pastWeather);

    return <Block title={'Forecast for a Date in the Past'}>
        <Filters>
            <SelectField handleChange={(city) =>  dispatch(changeCityAndSend(city))} city={weather.city}/>
            <DateField handleChange={(date) =>  dispatch(changeDateAndSend(date))} />
        </Filters>
        {
            weather.result ? <Result><WeatherCard weather={weather.result} className={'weather-card_full'} /></Result> : <Placeholder />
        }
    </Block>
}

