import React, { Component } from 'react';

import Board from './Board';

class MobileApp extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>ravichess mobile</h1>
        <Board />
        <p>buttons</p>
      </div>
    );
  }
}

export default MobileApp;
