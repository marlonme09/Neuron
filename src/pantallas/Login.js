import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, ImageBackground,
TouchableOpacity, Modal  } from 'react-native';
import LoginModal from './../modales/LoginModal';

export default class PantLogin extends Component<Props>{
  constructor(props){
    super(props);
    this.goToRegister.bind(this);
    this.state = {
      modalVisible: false
    }
  }

  goToRegister(){
    this.props.navigation.navigate('Registro');
  }

  goToMenu(){
    this.props.navigation.navigate('Menu');
  }

  showModal(){
    this.setState({modalVisible:true})
  }

  hideModal(){
    this.setState({modalVisible:false})
  }

  render(){
    return (
      <View style={styles.wrapper}>
        <ImageBackground style={styles.backgroundImage} source={require('./../images/neuron-background.png')}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./../images/neuron-logo.png')}/>
          <TouchableHighlight
            style={styles.buttonLogin}
            onPress={this.showModal.bind(this)}>
            <Text style={styles.buttonText}>INICIAR SESION</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonSignUp}
            onPress={ () => {this.goToRegister()} }>
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableHighlight>
        </View>
        <Text>Conectar con:</Text>
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
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => {this.state.modalVisible}}
          visible={this.state.modalVisible}>
          <LoginModal
            hideModal={this.hideModal.bind(this)}
            goToMenu={this.goToMenu.bind(this)}/>
        </Modal>
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
