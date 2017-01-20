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
  View
} from 'react-native';

import HeaderInit from './app/components/HeaderInit';

export default class ProfileApp extends Component {
  render() {
    return (
        <HeaderInit />
    );
  }
}

AppRegistry.registerComponent('ProfileApp', () => ProfileApp);
