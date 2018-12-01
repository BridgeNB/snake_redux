import React, { Component } from 'react';
import Keyboard from './Keyboard';
import Display from './Display';

import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Display />
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
