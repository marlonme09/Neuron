/**
 * Neuron App
 * https://github.com/marlonme09/Neuron
 *
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default App = StackNavigator(
  {
    Home: {screen: LoginScreen},
    Register: {screen: RegisterScreen}
  },
  {
    headerMode: 'none'
  }
);
