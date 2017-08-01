/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal,
  ToastAndroid
} from 'react-native';

export default class CustomNotification extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: this.props.message
    }
  }

  actions () {
    return (
      ToastAndroid.show(this.state.message, ToastAndroid.LONG)
    )
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.actions()} style={styles.welcome}>
          {this.props.textOnpress}
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('CustomNotification', () => CustomNotification);
