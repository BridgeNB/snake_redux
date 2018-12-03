import React, { Component } from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import Display from './Display';

import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Display />
          <Keyboard />
        </div>
      </div>
    );
  }
}

export default App;
