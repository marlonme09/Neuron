import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Switch, ImageBackground } from 'react-native';
import { Kaede } from 'react-native-textinput-effects';

export default class PantRegistro extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      switchValue: true
    }

    activarSwitch = (value) => {
      this.setState({switchValue: value})
    }
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <ImageBackground style={styles.backgroundImage} source={require('./../images/neuron-background.png')}>
          <Text
            style={styles.title}
            >Registrarse</Text>
          <View style={styles.container}>

            <Kaede
              style={styles.input}
              label={'Nombre'}
              labelStyle={styles.styleLabel}
              inputStyle={styles.styleInput}
              keyboardType="default"/>
            <Kaede
              style={styles.input}
              label={'Correo'}
              labelStyle={styles.styleLabel}
              inputStyle={styles.styleInput}
              keyboardType="email-address"/>
            <Kaede
              style={styles.input}
              label={'Contraseña'}
              secureTextEntry= {true}
              labelStyle={styles.styleLabel}
              inputStyle={styles.styleInput}/>
          </View>
          <TouchableHighlight
            style={styles.buttonSignUp}
            onPress={ () => { this.props.navigation.navigate('Categorias') } }>
            <Text style={styles.buttonText}>SIGUIENTE</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    width: 400,
    height: 50,
  },
  input: {
    marginTop: 4
  },
  styleInput: {
    color: 'black',
    backgroundColor: '#a5ceff',
  },
  styleLabel: {
    color: 'white',
    backgroundColor: '#5d8ec8',
  },
  title: {
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,

  },
  buttonSignUp: {
    backgroundColor: '#5d8ec8',
    width: 400,
    height: 50,
    marginTop: 50,
    marginBottom: 5
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
  }
});
