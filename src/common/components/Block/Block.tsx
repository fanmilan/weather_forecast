import './Block.scss';


type blockProps = {
    title: string,
    children: React.ReactNode
}

export const Block = ({title, children} : blockProps) => {
    return <article className={'block'}>
        <header className="block__header">
            <h1 className="block__title">{title}</h1>
        </header>
        <div className="block__body">
            {children}
        </div>
    </article>
}


export const Filters = ({children} : { children: React.ReactNode }) => {
    return <div className={'block__filters'}>
        {children}
    </div>
}

export const Result = ({children} : {children: React.ReactNode}) => {
    return <div className={'block__result'}>
        {children}
    </div>
}



export const ErrorRequest = ({text} : { text: string }) => {
    return <div className={'block__error'}>{text}</div>;
}

export const Placeholder = () => {
    return <div className={'placeholder'}>
        <div className="placeholder__image" />
        <div className="placeholder__text">Fill in all the fields and the weather will be displayed</div>
    </div>
}
