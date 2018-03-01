import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class LoginScreen extends Component<Props>{
  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./../images/neuron-logo.jpg')}/>
        <TouchableHighlight
          style={styles.buttonLogin}>
          <Text style={styles.buttonText}>INICIAR SESION</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonSignUp}>
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 285,
    height: 285,
    marginTop: 50
  },
  buttonLogin: {
    backgroundColor: '#2571ab',
    padding: 15,
    width: 350
  },
  buttonSignUp: {
    backgroundColor: '#5d8ec8',
    padding: 15,
    width: 350
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})
