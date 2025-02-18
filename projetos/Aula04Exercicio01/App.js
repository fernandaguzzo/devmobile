import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import NativeLogo from './assets/NativeLogo.png';

const App = () => {
  {/* Cria um estado chamado 'nome' com um valor inicial de string vazia. */}
  {/* 'setNome' é a função que atualiza o estado 'nome'. */}
  const [nome, setNome] = useState('');

  {/* Cria um estado chamado 'mensagem' com um valor inicial de string vazia. */}
  {/* 'setMensagem' é a função que atualiza o estado 'mensagem'. */}
  const [mensagem, setMensagem] = useState('');

  {/* Função chamada quando o botão for pressionado. */}
  const lidarComClique = () => {
    if (nome) {
      {/* Se o nome foi digitado, exibe uma mensagem personalizada. */}
      setMensagem(`Olá, ${nome}!`);
    } else {
      {/* Se nenhum nome foi digitado, exibe uma mensagem de aviso. */}
      setMensagem('Por favor, digite o seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={NativeLogo} style={styles.logo}  
      />
      
     
      <Text style={styles.titulo}>Exemplo Interativo</Text>

     
      <TextInput 
        style={styles.input}
        placeholder="Digite seu nome" 
        onChangeText={setNome} 
        value={nome} 
      />

      
      <Button title="Enviar" onPress={lidarComClique} />

      
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },

  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 20, 
  },

  titulo: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },

  input: {
    width: '100%', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingHorizontal: 10, 
  },

  mensagem: {
    marginTop: 20, 
    fontSize: 16, 
  },
});

export default App;


