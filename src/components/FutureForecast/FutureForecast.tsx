import './FutureForecast.scss';

import {Block, ErrorRequest, Filters, Placeholder, Result} from "../../common/components/Block/Block";
import {SelectField} from "../../common/components/SelectField/SelectField";
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../../redux/types/weather";
import {changePage, getFutureForecast} from "../../redux/actions/futureWeather";
import {Slider} from "../../common/components/Slider/Slider";

export const FutureForecast = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state: rootStateType) => state.futureWeather);

    return <Block title={'7 Days Forecast'}>
        <Filters>
            <SelectField handleChange={(city) => dispatch(getFutureForecast(city))} city={weather.city}/>
        </Filters>
        {
            weather.result.length ?
                <Result><Slider items={weather.result} page={weather.page} countOnPage={weather.countOnPage}
                                changePage={(page) => dispatch(changePage(page))}/></Result> : <Placeholder/>
        }
        {
            weather.errorRequest && <ErrorRequest text={weather.errorRequest} />
        }
    </Block>
}

