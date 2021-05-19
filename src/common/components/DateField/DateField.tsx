import './DateField.scss';
import {Field} from "../Field/Field";
import {useState} from "react";


type dateFieldProps = {
    handleChange: (date: number) => void
}

export const DateField = ({handleChange} : dateFieldProps) => {

    const [dateValue, setDateValue] = useState(null);

    const currentDate = new Date();


    const convertDateToIso = (date: any) => {
        return date.toISOString().split('T')[0];
    }


    const onChange = (e: any) => {

        //check if date is correct

        // 5 days before -

        setDateValue(e.target.value);
        handleChange(new Date(e.target.value).getTime() / 1000);
    }



    return <Field name={'date'} placeholder={'Select date'} value={dateValue}>
        <input type={'date'} className={'input input_date'} placeholder={'Select date'} onChange={onChange} min={'2021-05-10'}/>
    </Field>
}