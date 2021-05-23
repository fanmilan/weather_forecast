import './DateField.scss';
import {Field} from "../Field/Field";
import React from "react";
import {getMaxIsoDate, getMinIsoDate} from "../../date";


type dateFieldProps = {
    handleChange: (date: string) => void,
    date: null | string,
    error: null | string
}

export const DateField = ({handleChange, date, error} : dateFieldProps) => {

    console.log(getMinIsoDate());
    console.log(getMaxIsoDate());


    return <Field name={'date'} placeholder={'Select date'} value={date} error={error}>
        <input type={'date'} className={'input input_date'} placeholder={'Select date'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleChange(e.target.value)} } min={getMinIsoDate()} />
    </Field>
}