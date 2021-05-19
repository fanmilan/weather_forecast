import './Slider.scss';
import {WeatherCard} from "../WeatherCard/WeatherCard";
import {useState} from "react";

export const Slider = ({items} : any) => {


    const cardOnPage = 3;

    const lastPage = items.length - cardOnPage;

    const [page, setPage] = useState<number>(0); // currentSlide

    const changePage = (newPage: number) => {
        if (newPage >= 0 && newPage <= lastPage) setPage(newPage);
    }

    return <div className={'slider'}>
            <div className="slider__inside">
                {items.map((item : any, index: number) => {
                    let weatherClass = (index >= page && index<page+3) ? '' : 'weather-card_hidden';
                    return <WeatherCard weather={item} className={weatherClass} />;
                })}
            </div>
        <div className={"slider__btn slider__btn_left " + ((page === 0) ? 'slider__btn_disable' : '')} onClick={() => changePage(page-1)}/>
        <div className={"slider__btn slider__btn_right " + ((page === lastPage) ? 'slider__btn_disable' : '')} onClick={() => changePage(page+1)} />
    </div>
}