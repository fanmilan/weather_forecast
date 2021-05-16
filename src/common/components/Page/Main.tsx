import './scss/Main.scss';

type mainProps = {
    children: React.ReactNode
}

export const Main = ({children} : mainProps) => {
    return <main className={'main'}>
        <div className="page__content">
            {children}
        </div>
    </main>;
}