import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';

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
      {key: 'first', title: 'First'},
      {key: 'second', title: 'Second'},
      {key: 'third', title: 'Third'},
      {key: 'fourth', title: 'Fourth'},
      {key: 'fifth', title: 'Fifth'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderHeader = props => <TabBar {...props}/>;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

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
