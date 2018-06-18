import React, { Component } from 'react';
import logo from './bookmyshow-logo.png';
import './App.css';

import LoginContainer from './LoginContainer';
import axios from 'axios';
import { loginApi } from './Apiconfig';
import TransidButton from './TransidButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TransactionID Generator</h1>
        </header>
        <LoginContainer />
        <TransidButton />
      </div>
    );
  }
}

export default App;
