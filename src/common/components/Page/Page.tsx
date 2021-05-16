import './scss/Page.scss';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Main} from "./Main";

type pageProps = {
    children: React.ReactNode
}

export const Page = ({children} : pageProps) => {
    return <div className={'page'}>
        <div className="page__inside">
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
        <div className="page__background page__background_top" />
        <div className="page__background page__background_bottom" />
    </div>
}



