import React, { Component } from 'react';

import Board from './Board';

class DesktopApp extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>ravichess</h1>
        <Board />
        <p>buttons</p>
      </div>
    );
  }
}

export default DesktopApp;
