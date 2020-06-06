import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserView, MobileView } from "react-device-detect";

import DesktopApp from './components/DesktopApp';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserView>
      <DesktopApp />
    </BrowserView>
    <MobileView>
        <h1> This is rendered only on mobile </h1>
    </MobileView>
  </Provider>,
  document.querySelector('#root')
);

