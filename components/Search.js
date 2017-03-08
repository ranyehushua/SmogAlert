/* @flow weak */

import React, {PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const Search = (props) => (
  <View>
    <TextInput
      style={styles.input}
      autoFocus={false}
      editable={true}
      placeholder="Enter Zip Code"
      onSubmitEditing={ (event) => props.onSubmit(event.nativeEvent.text)}
    />
  </View>
);

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    height: 40,
    width: 200
  },
});
