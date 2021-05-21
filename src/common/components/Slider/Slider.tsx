import './Slider.scss';
import {WeatherCard} from "../WeatherCard/WeatherCard";
import {useState} from "react";
import {weatherType} from "../../../redux/types/weather";


type sliderProps = {
    items: Array<weatherType>,
    changePage: (newPage: number) => void,
    page: number,
    countOnPage: number
}

export const Slider = ({items, changePage, page, countOnPage} : sliderProps) => {

    const lastPage = items.length - countOnPage;

    return <div className={'slider'}>
            <div className="slider__inside">
                {items.map((item , index: number) => {
                    let weatherClass = (index >= page && index<page+3) ? '' : 'weather-card_hidden';
                    return <WeatherCard key={item.date} weather={item} className={weatherClass} />;
                })}
            </div>
        <div className={"slider__btn slider__btn_left " + ((page === 0) ? 'slider__btn_disable' : '')} onClick={() => changePage(page-1)} />
        <div className={"slider__btn slider__btn_right " + ((page === lastPage) ? 'slider__btn_disable' : '')} onClick={() => changePage(page+1)} />
    </div>
}