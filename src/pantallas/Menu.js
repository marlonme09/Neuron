import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import PantInicio from './Inicio';
import PantDonaciones from './Donaciones';
import PantMensajes from './Mensajes';
import PantNotificaciones from './Notificaciones';
import PantPerfil from './Perfil';

const initialLayout = {
  height: 0,
  width:Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[styles.container, {backgroundColor: '#ff4081'}]}/>;
const SecondRoute = () => <View style={[styles.container, {backgroundColor: '#673ab7'}]}/>;
const ThirdRoute = () => <View style={[styles.container, {backgroundColor: '#d31f1f'}]}/>;
const FourthRoute = () => <View style={[styles.container, {backgroundColor: '#d2b11e'}]}/>;
const FifthRoute = () => <View style={[styles.container, {backgroundColor: '#3fd11e'}]}/>;

export default class PantMenu extends Component<Props>{
  state = {
    index: 0,
    routes: [
      {key: 'inicio', title: 'Ini'},
      {key: 'donaciones', title: 'Don'},
      {key: 'mensajes', title: 'Men'},
      {key: 'notificaciones', title: 'Not'},
      {key: 'perfil', title: 'Per'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderHeader = props => <TabBar {...props}/>;

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'inicio':
        return <PantInicio/>;
        break;
      case 'donaciones':
        return <PantDonaciones/>;
        break;
      case 'mensajes':
        return <PantMensajes/>;
        break;
      case 'notificaciones':
        return <PantNotificaciones/>;
        break;
      case 'perfil':
        return <PantPerfil/>;
        break;
      default:
        return <PantInicio/>;
        break;
    }
  }

  render(){
    return(
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
