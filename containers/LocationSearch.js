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
    const { navigate } = this.props.navigation;
    this.setState({input: text});
    //Take state.input and pass it to the API call here
    fetch('http://127.0.0.1:3030/' + text)
      .then((data) => data.json())
      .then((data) => {
        this.setState({response: data});
        navigate('Results', { results: this.state.response });
      }).catch(error => console.error(error));
  }

  render() {

    return (
      <View style={styles.container}>
        <Search onSubmit={this.onTextSubmit} />
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
