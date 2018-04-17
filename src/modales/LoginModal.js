/**
* LoginModal
* Modal que sirve para iniciar sesión.
*
*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';

 export default class LoginModal extends Component<Props> {
   constructor(props){
     super(props);
     this.state = {
       usuario: '',
       password: '',
     }
   }

   render() {
     return (
       <View style={styles.wrapper}>
         <View style={styles.container}>
           <View style={styles.body}>
             <Text style={styles.title}>Iniciar Sesion</Text>
             <TextInput style={styles.input}
               placeholder={'Correo'}
               keyboardType= 'email-address'
               onChangeText={(usuario) => this.setState({usuario})}/>

              <TextInput style={styles.input}
               placeholder={'Contraseña'}
               secureTextEntry= {true}
               onChangeText={(password) => this.setState({password})}/>

             <TouchableHighlight style={styles.btnLogin}
               onPress={() => {this.props.goToMenu(), this.props.hideModal()}}>
               <Text style={styles.btnText}>Login</Text>
             </TouchableHighlight>
             <TouchableHighlight style={styles.btnCancelar}
               onPress={() => {this.props.hideModal()}}>
               <Text style={styles.btnText}>Cancelar</Text>
             </TouchableHighlight>
           </View>
         </View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   wrapper: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'rgba(0,0,0,.35)'
   },
   containter: {
    width: 400,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 5 },
    backgroundColor: '#FFFFFF',
    borderRadius: 100
  },
  body: {
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  btnLogin: {
    width: 295,
    height: 50,
    marginBottom: 2,
    marginTop: 25,
    backgroundColor: '#2571ab'
  },
  btnCancelar: {
    width: 295,
    height: 50,
    marginTop: 2,
    backgroundColor: '#5d8ec8'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12
  },
  title: {
    fontSize: 28,
    color: '#7A7A7A',
    textAlign: 'center'
  },
  input: {
    fontSize: 24,
    width: 305,
    textAlign: 'center',
    opacity: 0.5,
    borderColor: '#1D1D26',
    color: '#000000'
  }
 });
