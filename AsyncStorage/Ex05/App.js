import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [equipamento, setEquipamento] = useState(null);

 
  const salvarEquipamento = async () => {
    if (!id || !nome || !local) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    const novoEquipamento = { id, nome, local };

    try {
      await AsyncStorage.setItem(id, JSON.stringify(novoEquipamento)); 
      setMensagem('Equipamento salvo com sucesso!');
      limparCampos();
    } catch (error) {
      setMensagem('Erro ao salvar o equipamento.');
    }
  };

  
  const carregarEquipamento = async () => {
    if (!id) {
      setMensagem('Por favor, forneça um ID válido.');
      return;
    }

    try {
      const equipamentoSalvo = await AsyncStorage.getItem(id);
      if (equipamentoSalvo) {
        setEquipamento(JSON.parse(equipamentoSalvo)); 
        setMensagem('');
      } else {
        setEquipamento(null);
        setMensagem('Equipamento não encontrado.');
      }
    } catch (error) {
      setMensagem('Erro ao carregar o equipamento.');
    }
  };

  
  const alterarEquipamento = async () => {
    if (!id || !nome || !local) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const equipamentoSalvo = await AsyncStorage.getItem(id);
      if (equipamentoSalvo) {
        const equipamentoAlterado = { id, nome, local };
        await AsyncStorage.setItem(id, JSON.stringify(equipamentoAlterado)); 
        setEquipamento(equipamentoAlterado);
      } else {
        setMensagem('Equipamento não encontrado para atualizar.');
      }
    } catch (error) {
      setMensagem('Erro ao atualizar o equipamento.');
    }
  };

  
  const removerEquipamento = async () => {
    if (!id) {
      setMensagem('Por favor, forneça um ID válido.');
      return;
    }

    try {
      const equipamentoSalvo = await AsyncStorage.getItem(id);
      if (equipamentoSalvo) {
        await AsyncStorage.removeItem(id); // Remove o equipamento
        setMensagem('Equipamento removido com sucesso!');
        setEquipamento(null);
        limparCampos();
      } else {
        setMensagem('Equipamento não encontrado para remover.');
      }
    } catch (error) {
      setMensagem('Erro ao remover o equipamento.');
    }
  };

  
  const limparCampos = () => {
    setId('');
    setNome('');
    setLocal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestão de Equipamentos</Text>

     
      <TextInput
        style={styles.input}
        placeholder="ID do Equipamento"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Equipamento"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Local de Instalação"
        value={local}
        onChangeText={setLocal}
      />

     
      <Button title="Cadastrar Equipamento" onPress={salvarEquipamento} />
      <Button title="Carregar Equipamento" onPress={carregarEquipamento} />
      <Button title="Alterar Equipamento" onPress={alterarEquipamento} />
      <Button title="Remover Equipamento" onPress={removerEquipamento} />

      
      <Text style={styles.mensagem}>{mensagem}</Text>

      
      {equipamento && (
        <View style={styles.equipamentoInfo}>
          <Text>ID: {equipamento.id}</Text>
          <Text>Nome: {equipamento.nome}</Text>
          <Text>Local: {equipamento.local}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    paddingLeft: 8,
  },
  mensagem: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'green',
  },
  equipamentoInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
  },
});
