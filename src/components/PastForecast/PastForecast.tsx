import {useDispatch, useSelector} from "react-redux";
import {Block, Filters, Placeholder} from "../../common/components/Block/Block";
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
            <SelectField handleChange={(city) =>  dispatch(changeCityAndSend(city))} />
            <DateField handleChange={(date) =>  dispatch(changeDateAndSend(date))} />
        </Filters>
        {
            weather.result ? <Result result={weather.result} /> : <Placeholder />
        }
    </Block>
}

type resultProps = {
    result: weatherType
}

const Result = ({result} : resultProps) => {
    return <div className={'result'}>
        <WeatherCard weather={result} className={'weather-card_full'} />
    </div>
}