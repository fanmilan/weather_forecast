import {cityType} from "../redux/types/weather";

const TOKEN = '3c237680bd869ff1f9b731f466278d6b';

export const getFutureForecastApi = (params: cityType) => {
    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${params.coordinates[0]}&lon=${params.coordinates[1]}&units=metric&exclude=hourly,minutely,alerts&appid=${TOKEN}`

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Response is not ok...');
            }
            return response.json();
        })
        .then(result => result.daily.map((item: any) => ({
                date: new Date(item.dt * 1000).toLocaleString('en-GB', {
                    year: "numeric", month: "short", day: "numeric"
                }),
                temperature: Math.round(item.temp.day),
                image: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
            }))
        );
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
                throw new Error('Response is not ok...');
            }
            return response.json();
        })
        .then(result => {
            let hourly = result.hourly[14];
            return ({
                date: new Date(hourly.dt * 1000).toLocaleString('en-GB', {
                    year: "numeric", month: "short", day: "numeric"
                }),
                temperature: Math.round(hourly.temp),
                image: `https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`
            });
        });
}