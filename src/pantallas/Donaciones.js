import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

export default class PantDonaciones extends Component<Props>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <ImageBackground style={styles.backgroundImage} source={require('./../images/donaciones.jpg')}>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
