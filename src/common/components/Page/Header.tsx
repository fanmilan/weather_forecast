import './scss/Header.scss';

export const Header = () => {
    return <header className={'header'}>
        <div className="header__logo">
            <span className={'logo__top'}>Weather</span>
            <span className={'logo__bottom'}>forecast</span>
        </div>
    </header>;
}