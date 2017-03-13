import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || 'Loading',
      speed: props.speed || 300
    }
  }

  propTypes: {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number
  }

  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = setInterval(() => {
      if(this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        var temp = this.state.text;
        this.setState({
          text: temp + '.'
        })
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}
