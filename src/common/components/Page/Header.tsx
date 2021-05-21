import './scss/Header.scss';

export const Header = () => {
    return <header className={'header'}>
        <h1 className="header__title">
            <span className={'header__title-top'}>Weather</span>
            <span className={'header__title-bottom'}>forecast</span>
        </h1>
    </header>;
}