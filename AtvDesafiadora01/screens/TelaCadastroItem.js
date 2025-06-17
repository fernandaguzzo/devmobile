import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const TelaCadastroItem = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const { adicionarItem } = route.params;

  const validarCampos = () => {
    if (!nome.trim() || !codigo.trim() || !quantidade.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return false;
    }
    if (isNaN(quantidade) || parseInt(quantidade) <= 0) {
      Alert.alert('Erro', 'Quantidade inválida');
      return false;
    }
    return true;
  };

  const handleSalvar = () => {
    if (!validarCampos()) return;

    const novoItem = {
      nome,
      codigo,
      quantidade: parseInt(quantidade),
      localizacao: 'Nova localização' // Pode ser um campo adicional
    };

    adicionarItem(novoItem);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da peça"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Código da peça"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <Button
        title="Salvar"
        onPress={handleSalvar}
        color="#27ae60"
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
    formCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 24,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
    },
    inputLabel: {
      fontSize: 14,
      color: '#2D3436',
      marginBottom: 8,
      fontWeight: '500',
    },
    input: {
      backgroundColor: '#F8F9FA',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: '#2D3436',
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#DFE6E9',
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 24,
    },
    saveButton: {
      flex: 1,
      backgroundColor: '#00B894',
      borderRadius: 8,
      padding: 14,
      alignItems: 'center',
    },
    cancelButton: {
      flex: 1,
      backgroundColor: '#D63031',
      borderRadius: 8,
      padding: 14,
      alignItems: 'center',
    },
  });

export default TelaCadastroItem;