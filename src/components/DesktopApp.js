import "./DesktopApp.css";
import React, { Component } from 'react';

import Board from './Board';

class DesktopApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-box">
          <h1>ravichess desktop</h1>
        </div>
        <div className="middle-box">
          <div className="board-container">
            <Board />
          </div>
        </div>
        <div className="bottom-box">
          <p>buttons</p>
        </div>
      </div>
    );
  }
}

export default DesktopApp;
