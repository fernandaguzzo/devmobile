import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';

const TelaInventario = ({ navigation }) => { 
  const listaItens = [
    { id: '1', nome: 'Parafuso 6mm', quantidade: 150, codigo: 'P001' },
    { id: '2', nome: 'Porca 6mm', quantidade: 200, codigo: 'P002' },
    { id: '3', nome: 'Arruela 6mm', quantidade: 180, codigo: 'P003' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Código: {item.codigo}</Text>
        <Text>Quantidade: {item.quantidade}</Text>
      </View>
      <TouchableOpacity
        style={styles.botaoEditar}
        onPress={() => navigation.navigate('AjusteQuantidade', { item })} 
      >
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listaItens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
      <Button
        title="Adicionar Nova Peça"
        onPress={() => navigation.navigate('CadastroItem')} 
        color="#2c3e50"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f6fa',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  botaoEditar: {
    backgroundColor: '#f39c12',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TelaInventario;