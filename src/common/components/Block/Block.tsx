import './Block.scss';

import {SelectField} from "../SelectField/SelectField";

type blockProps = {
    title: string
}

export const Block = ({title} : blockProps) => {
    return <section className={'block'}>
        <div className="block__header">
            <h1 className="block__title">{title}</h1>
        </div>
        <div className="block__body">
            <Filters />
            <Placeholder />
        </div>
    </section>
}

const Filters = () => {
    return <div className={'block__filters'}>
        <SelectField placeholder={'Select city'}/>
    </div>
}

const Placeholder = () => {
    return <div className={'placeholder'}>
        <div className="placeholder__image" />
        <div className="placeholder__text">Fill in all the fields and the weather will be displayed</div>
    </div>
}
