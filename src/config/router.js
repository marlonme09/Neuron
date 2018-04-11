/**
 * Este archivo se encarga de acomodar los componentes para el react navigation
 *
 */

 import React from 'react';
 import {StackNavigator} from 'react-navigation';

// Pantallas
 import LoginScreen from './../pantallas/Login';
 import RegisterScreen from './../pantallas/Registro';

export const Navigation = StackNavigator({
  Home: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
  }
});
