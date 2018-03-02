import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class LoginScreen extends Component<Props>{

  constructor(props){
    super(props);
    this.goToRegister.bind(this);
  }

  goToRegister(){
    this.props.navigation.navigate('Register');
  }

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
          style={styles.buttonSignUp}
          onPress={ () => { this.props.navigation.navigate('Register') } }>
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 285,
    height: 285,
    marginTop: 35,
    alignItems: 'center'
  },
  buttonLogin: {
    marginTop: 50,
    backgroundColor: '#2571ab',
    width: 400,
    height: 50
  },
  buttonSignUp: {
    backgroundColor: '#5d8ec8',
    width: 400,
    height: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12
  }
})
