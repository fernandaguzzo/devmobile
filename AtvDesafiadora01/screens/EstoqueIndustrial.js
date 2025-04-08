import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';

const EstoqueIndustrialScreen = ({ navigation }) => {
  // Dados iniciais do estoque
  const [estoque, setEstoque] = useState([
    { id: '1', nome: 'Parafuso 6mm', quantidade: 150, codigo: 'P001', localizacao: 'Prateleira A1' },
    { id: '2', nome: 'Porca 6mm', quantidade: 200, codigo: 'P002', localizacao: 'Prateleira A2' },
    { id: '3', nome: 'Arruela 6mm', quantidade: 180, codigo: 'P003', localizacao: 'Prateleira A3' },
  ]);

  // Função para adicionar novo item
  const adicionarItem = (novoItem) => {
    setEstoque(prev => [...prev, {
      ...novoItem,
      id: Math.random().toString()
    }]);
  };

  // Função para atualizar quantidade
  const atualizarQuantidade = (codigo, novaQuantidade) => {
    setEstoque(prev => 
      prev.map(item => 
        item.codigo === codigo ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  // Componente de item da lista
  const ItemLista = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text>Código: {item.codigo}</Text>
        <Text>Quantidade: {item.quantidade}</Text>
        <Text>Localização: {item.localizacao}</Text>
      </View>
      <TouchableOpacity
        style={styles.botaoEditar}
        onPress={() => navigation.navigate('AjusteQuantidade', { 
          item,
          atualizarQuantidade 
        })}
      >
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={estoque}
        renderItem={ItemLista}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lista}
      />
      
      <Button
        title="Adicionar Nova Peça"
        onPress={() => navigation.navigate('CadastroItem', { adicionarItem })}
        color="#2c3e50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
      paddingHorizontal: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      paddingVertical: 16,
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      paddingHorizontal: 16,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: '#2D3436',
      letterSpacing: 0.5,
    },
    item: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    itemContent: {
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#2D3436',
      marginBottom: 4,
    },
    itemCode: {
      fontSize: 12,
      color: '#636E72',
      marginBottom: 4,
    },
    itemQuantity: {
      fontSize: 14,
      fontWeight: '500',
      color: '#00B894',
    },
    editButton: {
      backgroundColor: '#FDCB6E',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    addButton: {
      backgroundColor: '#0984E3',
      borderRadius: 50,
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 24,
      right: 24,
      elevation: 4,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 14,
    },
  });

export default EstoqueIndustrialScreen;