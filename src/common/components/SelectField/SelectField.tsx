import './SelectField.scss';

import {Field} from "../Field/Field";
import {useState} from "react";


type selectFieldProps = {
    placeholder: string,
}



export const SelectField = ({placeholder} : selectFieldProps) => {
    const [value, setValue] = useState<null | string>(null);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpenModal(!isOpenModal);
    }

    const selectOption = (value: string) => {
        setValue(value);
        setIsOpenModal(false);
    }


    let fieldClass = (isOpenModal) ? 'field_is-open' : '';

    return <Field className={fieldClass}
                  name={'select'}
                  placeholder={'Select city'}
                  value={value}
                  onClick={handleClick}>
        <input type={'text'} className={'input input_select'} placeholder={placeholder} />
        {
            isOpenModal && <SelectModal onClick={selectOption}/>
        }
    </Field>
}


type selectModalProps = {
    onClick: (city: string) => void
}

const SelectModal = ({onClick} : selectModalProps) => {
    const cities = ['Самара', 'Тольятти', 'Москва', 'Казань', 'Саратов', 'Краснодар'];

    return <div className="select-modal">
        <ul className={'select-modal__list'}>
            {cities.map((city) => <li className='select-modal__option' onClick={() => onClick(city)} key={city}>{city}</li>)}
        </ul>
    </div>
}