import React, {Component} from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

export default class CategoriasHeader extends Component<Props>{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.Header}>
        <Text>Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    alignItems: 'center'
  }
})
