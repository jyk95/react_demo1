/*eslint-disable*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import store from './store';
import Routers from './router'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routers></Routers>
      </Provider>
    );
  }
}

export default App;
