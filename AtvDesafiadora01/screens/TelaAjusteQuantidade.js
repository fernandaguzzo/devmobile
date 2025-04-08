import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const TelaAjusteQuantidade = ({ navigation, route }) => {
  const { item, atualizarQuantidade } = route.params;
  const [novaQuantidade, setNovaQuantidade] = useState(item.quantidade.toString());

  const handleSalvar = () => {
    if (!novaQuantidade || isNaN(novaQuantidade)) {
      Alert.alert('Erro', 'Informe uma quantidade válida');
      return;
    }

    atualizarQuantidade(item.codigo, parseInt(novaQuantidade));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text style={styles.codigo}>Código: {item.codigo}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nova quantidade"
        keyboardType="numeric"
        value={novaQuantidade}
        onChangeText={setNovaQuantidade}
      />
      
      <Button
        title="Atualizar"
        onPress={handleSalvar}
        color="#2c3e50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F9FA',
      padding: 24,
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 24,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#2D3436',
      marginBottom: 8,
    },
    code: {
      fontSize: 16,
      color: '#636E72',
      marginBottom: 24,
    },
    inputContainer: {
      marginBottom: 32,
    },
    inputLabel: {
      fontSize: 14,
      color: '#2D3436',
      marginBottom: 8,
      fontWeight: '500',
    },
    quantityInput: {
      backgroundColor: '#F8F9FA',
      borderRadius: 8,
      padding: 16,
      fontSize: 18,
      fontWeight: '600',
      color: '#0984E3',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#74B9FF',
    },
    updateButton: {
      backgroundColor: '#0984E3',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
    },
  });

export default TelaAjusteQuantidade;