import {cityType} from "../redux/types/weather";

const TOKEN = '3c237680bd869ff1f9b731f466278d6b';

export const handleError = (response: Response) => {
        return response
            .json()
            .then((err : {code: number, message: string}) => {
                throw new Error(err.message);
            })
}

type dailyResponseType = {
    dt: number,
    temp: {
        day: number
    },
    weather: Array<{icon: string}>
}

export const getFutureForecastApi = (params: cityType) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${params.coordinates[0]}&lon=${params.coordinates[1]}&units=metric&exclude=hourly,minutely,alerts&appid=${TOKEN}`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                return handleError(response);
            }
            return response.json();
        })
        .then(result => result.daily.map((item: dailyResponseType) => ({
                date: new Date(item.dt * 1000).toLocaleString('en-GB', {
                    year: "numeric", month: "short", day: "numeric"
                }),
                temperature: Math.round(item.temp.day),
                image: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
            }))
        )
}

type dateParamsType = {
    city: cityType,
    date: number
}

export const getDateForecastApi = (params: dateParamsType) => {
    const url = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${params.city.coordinates[0]}&lon=${params.city.coordinates[1]}&dt=${params.date}&units=metric&appid=${TOKEN}`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                return handleError(response);
            }
            return response.json();
        })
        .then(result =>  ({
                date: new Date(result.current.dt * 1000).toLocaleString('en-GB', {
                    year: "numeric", month: "short", day: "numeric"
                }),
                temperature: Math.round(result.current.temp),
                image: `https://openweathermap.org/img/wn/${result.current.weather[0].icon}@2x.png`
            }));
}