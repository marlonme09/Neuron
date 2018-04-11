/**
 * Neuron App
 * https://github.com/marlonme09/Neuron
 *
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import LoginScreen from './pantallas/Login';
import RegisterScreen from './pantallas/Registtro';

export default App = StackNavigator({
  Home: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
    navigationOptions: {
      headerTitle: 'Registrarse',
    },
  }
});
