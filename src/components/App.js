import React, { Component } from 'react';
import Clock from './Clock/';
import Keyboard from './Keyboard';
import Display from './Display';

import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />

        <div className="Snake__grid">
          <div className="container">
            <Display />
            <Keyboard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
