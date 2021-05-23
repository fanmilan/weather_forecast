import './Field.scss';


type fieldProps = {
    name: string,
    className?: string,
    value?: string | null,
    placeholder: string,
    children: React.ReactNode
    onClick?: any,
    error?: null | string
}



export const Field = ({name, className, value, placeholder, children, error, onClick} : fieldProps) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    }
    let fieldClassName = `field_${name} ` + (className ? className : '');
    fieldClassName += (error) ? ' field_error' : '';
    fieldClassName += (!value) ? ' field_is-empty' : ' field_not-empty';

    return <div className={'field '+fieldClassName}>
        <div className="field__input" onClick={handleClick}>
            {children}

            <div className={'field__placeholder'}>{placeholder}</div>
        </div>
        {
            error && <div className={'field__error'}>{error}</div>
        }
    </div>
}