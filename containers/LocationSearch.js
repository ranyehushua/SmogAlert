import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Search from '../components/Search';

export default class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      response: null
    };
  }

  static navigationOptions = {
    title: 'Search',
  }


  onTextSubmit = (text) => {
    this.setState({input: text});
    //Take state.input and pass it to the API call here
    fetch('http://127.0.0.1:3030/' + text)
      .then((data) => data.json())
      .then((data) => {
        this.setState({response: data});
        console.log(this.state.response);
      }).catch(error => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Search onSubmit={this.onTextSubmit} />
        {this.state.response
          ? <View>
            <Text>Location: {this.state.response.city}, {this.state.response.state}</Text>
            {this.state.response.actionDay
              ? <Text>ACTION DAY!</Text>
              : null
            }
            <Text>Date/Time: {this.state.response.dateTime}</Text>
            <Text>Ozone AQI: {this.state.response.ozoneAQI}</Text>
            <Text>Ozone Category: {this.state.response.ozoneAQIcategory}</Text>
            <Text>PM 2.5 AQI: {this.state.response.pm25AQI}</Text>
            <Text>PM 2.5 Category: {this.state.response.pm25AQIcategory}</Text>
          </View>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
