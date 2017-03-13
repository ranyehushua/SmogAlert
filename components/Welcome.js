import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to SmogAlert</Text>
        <Button
          onPress={() => navigate('Search')}
          title="Search"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default Welcome;
