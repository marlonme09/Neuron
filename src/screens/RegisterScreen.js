import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  nombre: t.String,
  apellido: t.String,
  nombre_usuario: t.String,
  email: t.String,
  contraseña: t.String
});


export default class RegisterScreen extends Component<Props>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Form type={User}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#FFFFFF'
  }
});
