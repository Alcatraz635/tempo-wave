import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Router from './containers/Router';
import configureStore from './configureStore';

//const store = configureStore(); store={store}

const TempoWave = () => (
  <Provider >
    <Router />
  </Provider>
);

AppRegistry.registerComponent('TempoWave', () => TempoWave);
