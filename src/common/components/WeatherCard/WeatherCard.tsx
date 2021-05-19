import './WeatherCard.scss';
import {weatherType} from "../../../redux/types/weather";


type weatherCardProps = {
    weather: weatherType,
    className?: string,
};

export const WeatherCard = ({weather, className} : weatherCardProps) => {
    const styleBackground = {
        background: `url(${weather.image}) 50% 50% no-repeat`
    }

    const temperatureSign = (weather.temperature > 0) ? '+' : '';

    return <div className={'weather-card ' + (className ? className : '')}>
        <div className="weather-card__inside">
            <div className="weather-card__date">{weather.date}</div>
            <div className="weather-card__image" style={styleBackground}/>
            <div className="weather-card__temperature">{temperatureSign}{weather.temperature}°</div>
        </div>
    </div>;
}