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
import App from './app'

export default class CustomNotification extends Component {

  render () {
    return (
      <App message={'Thank You!'} textOnpress={'Click Me!'} />
    );
  }
}

AppRegistry.registerComponent('CustomNotification', () => CustomNotification);
