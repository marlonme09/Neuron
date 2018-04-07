import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Kaede } from 'react-native-textinput-effects';

export default class RegisterScreen extends Component<Props>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View>
        <Text>Resgistrarse</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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
  }
});
