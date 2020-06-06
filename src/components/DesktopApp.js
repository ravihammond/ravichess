import "./DesktopApp.css";
import React, { Component } from 'react';

import Board from './Board';

class DesktopApp extends Component {
  render() {
    return (
      <div className="desktopApp">
        <h1>ravichess desktop</h1>
        <Board />
        <p>buttons</p>
      </div>
    );
  }
}

export default DesktopApp;
