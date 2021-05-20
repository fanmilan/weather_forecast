import './SelectField.scss';

import {Field} from "../Field/Field";
import {useEffect, useRef, useState} from "react";
import {CITIES} from "../../constants/cities";
import {cityType} from "../../../redux/types/weather";


type selectFieldProps = {
    handleChange?: (city: cityType) => void
}



export const SelectField = ({handleChange} : selectFieldProps) => {

    const [value, setValue] = useState<null | string>(null);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const closeModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    const selectOption = (value: cityType) => {
        setValue(value.name);
        setIsOpenModal(false);
        if (handleChange) handleChange(value);
    }

    let fieldClass = (isOpenModal) ? 'field_is-open' : '';

    return <Field className={fieldClass}
                  name={'select'}
                  placeholder={'Select city'}
                  value={value}
                  onClick={closeModal}>
        <div className={'input input_select'}>{value}</div>
        {
            isOpenModal && <SelectModal onClick={selectOption} closeModal={closeModal}/>
        }
    </Field>
}


type selectModalProps = {
    closeModal: () => void,
    onClick: (city: cityType) => void
}

const SelectModal = ({onClick, closeModal} : selectModalProps) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutsideModal = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                closeModal();
            }
        }

        document.addEventListener('click', handleClickOutsideModal);
        return () => {
            document.removeEventListener('click', handleClickOutsideModal);
        }
    }, [closeModal]);



    return <div className="select-modal" ref={modalRef}>
        <ul className={'select-modal__list'}>
            {CITIES.map((city) => <li className='select-modal__option' onClick={() => onClick(city)} key={city.name}>{city.name}</li>)}
        </ul>
    </div>
}