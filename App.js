import React, {Component} from 'react';
import { Provider} from 'react-redux';
import {createStore} from 'redux';


import AppContainer from './src/Route';
import reducers from './src/reducers'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppContainer />
      </Provider>
    );
  }
}
