import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableHighligth, Image } from 'react-native';

export default class Categorias extends Component<Props>{
  constructor(props){
    super(props);
  }

  render(){
    const { categoria, selected, id} = this.props.categ;
    const icon = selected ? require('./../images/checkbox-blank-outline.png') : require('./../images/checkbox-marked.png');

    return (
      <TouchableHighligth onPress={() => {this.props.selectCate(id)}} style={styles.categoria}>
        <View style={styles.container}>
          <Image style={styles.selectedIcon} source={icon}/>
          <Text style={selected ? styles.categorySelected : styles.categoryText}>{categoria}</Text>
        </View>
      </TouchableHighligth>
    );
  }
}

const styles = StyleSheet.create({
  categoria: {
    height: 60
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#A7E7E7'
  },
  categoryText: {
    fontSize: 21
  },
  categorySelected: {
    fontSize: 21,
    color: '#D4A4A4'
  }
})
