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
    this.state = {input: ''};
  }


  onTextSubmit = (text) => {
    this.setState({input: text});
    //Take state.input and pass it to the API call here
  }

  render() {
    return (
      <View>
        <Search onSubmit={this.onTextSubmit} />
        {this.state.input.length > 0
          ? <Text>{this.state.input}</Text>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
