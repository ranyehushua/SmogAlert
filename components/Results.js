/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Results extends Component {
  static navigationOptions = {
    title: 'Results',
  }

  render() {
    const { params } = this.props.navigation.state;
    const results = params.results;
    return (
      <View style={styles.container}>
        <Text>Location: {results.city}, {results.state}</Text>
        {results.actionDay
          ? <Text>ACTION DAY!</Text>
          : null
        }
        <Text>Date/Time: {results.dateTime}</Text>
        <Text>Ozone AQI: {results.ozoneAQI}</Text>
        <Text>Ozone Category: {results.ozoneAQIcategory}</Text>
        <Text>PM 2.5 AQI: {results.pm25AQI}</Text>
        <Text>PM 2.5 Category: {results.pm25AQIcategory}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
