import './styles/common.scss';

import React from 'react';
import './App.css';
import {Page} from "./common/components/Page/Page";
import {Block} from "./common/components/Block/Block";

function App() {
  return (
    <div className="App">
      <Page>
        <Block title={'7 Days Forecast'} />
        <Block title={'Forecast for a Date in the Past'} />
      </Page>
    </div>
  );
}

export default App;
