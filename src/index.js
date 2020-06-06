import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserView, MobileView } from "react-device-detect";

import DesktopApp from './components/DesktopApp';
import MobileApp from './components/MobileApp';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserView style={{height:"100%"}}>
      <DesktopApp />
    </BrowserView>
    <MobileView style={{height:"100%"}}>
      <MobileApp />
    </MobileView>
  </Provider>,
  document.querySelector('#root')
);
