import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Frame from './Instagram-Applet/components/Frame/Frame'
import Output from './Instagram-Applet/components/Output/Output'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        <div className='app-container'>
          <div className='Instagram'>
            <Frame />
            <Output />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
