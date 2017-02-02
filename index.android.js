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
  constructor(props) {
   super(props);
   this.clearText = this.clearText.bind(this);
 }

 clearText() {
   this._textInput.setNativeProps({text: ''});
 }
  render() {
    return (
        <HeaderInit />
    );
  }
}

AppRegistry.registerComponent('ProfileApp', () => ProfileApp);
