import React, { Component } from 'react';
import Clock from './Clock/';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Snake__grid">
          <div>
            <Clock />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
