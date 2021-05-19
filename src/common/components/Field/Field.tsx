import './Field.scss';
import {useEffect} from "react";


type fieldProps = {
    name: string,
    className?: string,
    value?: string | null,
    placeholder: string,
    children: React.ReactNode //input,
    onClick?: any
}



export const Field = ({name, className, value, placeholder, children, onClick} : fieldProps) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    let fieldClassName = `field_${name} ${className}`;
    fieldClassName += (!value) ? ' field_is-empty' : ' field_not-empty';

    return <div className={'field '+fieldClassName}>
        <div className="field__input" onClick={handleClick}>
            {children}
            <div className={'field__placeholder'}>{placeholder}</div>
        </div>

    </div>
}