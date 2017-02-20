import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Home from './containers/Home';
//import configureStore from './configureStore';

//const store = configureStore(); store={store}

const TempoWave = () => (
  //<Provider >
    <Home />
  //</Provider>
);

AppRegistry.registerComponent('TempoWave', () => TempoWave);
