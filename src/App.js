/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigation} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';

const ScreenStack = StackNavigation(
  {
    Home: {screen: LoginScreen}
  },
  {
    headerMode: 'none'
  }
);

export default class App extends Component<Props> {
  render(){
    return <ScreenStack/>;
  }
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: '#60b7ea'
  }
});
