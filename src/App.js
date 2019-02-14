/*eslint-disable*/
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import store from './store';
import Routers from './router'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: ''
    }
  }
  getScreenHeight () {
    if (window.innerHeight) {
      this.setState({
        height : window.innerHeight + 'px'
      })
    } else if ((document.body) && (document.body.clientHeight)) {
      this.setState({
        height : document.body.clientHeight + 'px'
      })
    }
  }
  render () {
    return (
      <Provider store={store}>
        <div style={{ height: this.state.height, backgroundColor: 'white'}}>
          <Routers></Routers>
        </div>
      </Provider>
    );
  }
  componentDidMount() {
    this.getScreenHeight()
    window.addEventListener('resize', this.getScreenHeight.bind(this));
  }
}

export default App;
