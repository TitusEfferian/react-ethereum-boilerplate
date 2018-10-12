import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux';

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
