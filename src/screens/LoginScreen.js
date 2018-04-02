import React, {Component} from 'react';
//import {StackNavigator} from 'react-navigation';
//import RegisterScreen from './../screens/RegisterScreen';

import { View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground,
TouchableOpacity  } from 'react-native';

export default class LoginScreen extends Component<Props>{

  constructor(props){
    super(props);
    this.goToRegister.bind(this);
  }

  goToRegister(){
    //Alert.alert("Hola pinche putita");
    this.props.navigation.navigate('Register');
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <ImageBackground style={styles.backgroundImage} source={require('./../images/neuron-background.png')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./../images/neuron-logo.png')}/>
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
        <View style={styles.buttonImagesContainer}>
          <TouchableOpacity>
            <Image
              style={styles.buttonsLogo}
              source={require('./../images/twitter-logo.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.buttonsLogo}
              source={require('./../images/facebook-logo.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.buttonsLogo}
              source={require('./../images/google-logo.png')}
              />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.buttonsLogo}
              source={require('./../images/linkedin-logo.png')}
              />
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' ,
    flexDirection: 'column'
  },
  logo: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLogin: {
    marginTop: 50,
    backgroundColor: '#2571ab',
    width: 400,
    height: 50,
    marginBottom: 2
  },
  buttonSignUp: {
    backgroundColor: '#5d8ec8',
    width: 400,
    height: 50,
    marginTop: 2
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonsLogo: {
    width: 30,
    height: 30,
    borderRadius: 5,
    margin: 3,
    marginBottom: 10
  }
});
