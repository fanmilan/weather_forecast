import 'normalize.css';
import './styles/common.scss';
import './App.css';

import React from 'react';


import {Page} from "./common/components/Page/Page";
import {FutureForecast} from "./components/FutureForecast/FutureForecast";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import {PastForecast} from "./components/PastForecast/PastForecast";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Page>
                    <FutureForecast />
                    <PastForecast />
                </Page>
            </div>
        </Provider>
    );
}

export default App;
