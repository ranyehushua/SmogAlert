import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import LocationSearch from './containers/LocationSearch';
import Welcome from './components/Welcome';
import Results from './components/Results';



const App = StackNavigator({
  Welcome: { screen: Welcome },
  Search: { screen: LocationSearch },
  Results: { screen: Results },
});

AppRegistry.registerComponent('SmogAlert', () => App);
