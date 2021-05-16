import './Field.scss';
import {useEffect} from "react";


type fieldProps = {
    name: string,
    className?: string,
    value: string | null,
    placeholder: string,
    children: React.ReactNode //input,
    onClick?: any
}



export const Field = ({name, className, value, placeholder, children, onClick} : fieldProps) => {

    const handleClick = () => {
       // console.log(document.getElementsByTagName('input')[1].focus());
        if (onClick) {
            onClick();
        }
    }

    let fieldClass = (!value) ? ' field_is-empty' : '';

    return <div className={'field field_'+name+' '+className + fieldClass}>
        <div className="field__input" onClick={handleClick}>{value || placeholder}</div>
        {children}
        <div className="field__icon" />
    </div>
}