import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import CategoriasHeader from './../componentes/CateHeader';
import Categorias  from './../componentes/CateBody';

export default class PantCategorias extends Component{
  constructor(props){
    super(props);
    this.state = {
      categorias: [
        { id: 1, categoria: 'Artes graficas', selected: false },
        { id: 2, categoria: 'Arquitectura', selected: false },
        { id: 3, categoria: 'Innovación', selected: false },
        { id: 4, categoria: 'Manejo de redes', selected: false },
        { id: 5, categoria: 'Marketing', selected: false },
        { id: 6, categoria: 'Ciencia', selected: false },
        { id: 7, categoria: 'Politica', selected: false },
        { id: 8, categoria: 'Arte urbano', selected: false },
        { id: 9, categoria: 'Programación', selected: false },
        { id: 10, categoria: 'Alimentación', selected: false },
        { id: 11, categoria: 'Biotecnologia', selected: false },
        { id: 12, categoria: 'Arquitectura', selected: false }
      ]
    }
  }

  selectCate(idCate){
      let cateActual = [...this.state.categorias];
      let cateSeleccionada = categoriaActual.find(categ => categ.id === idCate);
      cateSeleccionada.completed = !cateSeleccionada.completed;
      this.setState({ categorias: cateActual });
  }

  renderCate(){
    return(
      this.state.categorias.map((categ) => {
        return(
          <Categorias key={categ.id} categ={categ} selectCate={this.selectCate.bind(this)}/>
        )
      })
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Categorias</Text>
        <CategoriasHeader/>
        <ScrollView style={styles.categContainer}>{this.renderCate()}</ScrollView>
        <Categorias/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  categContainer: {
    flex: 1,
    backgroundColor: 'white',
  }
});
