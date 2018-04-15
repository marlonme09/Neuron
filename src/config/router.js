/**
 * Este archivo se encarga de acomodar los componentes para el react navigation
 *
 */

 import React from 'react';
 import { StackNavigator } from 'react-navigation';

// Pantallas
 import PantLogin from './../pantallas/Login';
 import PantRegistro from './../pantallas/Registro';
 import PantCategorias from './../pantallas/Categorias';

export const Navigation = StackNavigator({
  Home: {
    screen: PantLogin,
    navigationOptions: {
      header: null,
    },
  },
  Registro: {
    screen: PantRegistro,
  },
  Categorias: {
    screen: PantCategorias,
    navigationOptions: {
      header: null,
    },
  },
});
