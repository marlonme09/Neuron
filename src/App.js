/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const ScreenStack = StackNavigator(
  {
    Home: {screen: LoginScreen},
    Register: {screen: RegisterScreen}
  },
  {
    headerMode: 'none'
  }
);

export default class App extends Component<Props> {
  render(){
    return(
      <ScreenStack/>
    )
  }
}

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: '#60b7ea'
  }
});
