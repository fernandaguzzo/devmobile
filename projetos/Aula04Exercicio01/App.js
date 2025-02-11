import React, { useState } from 'react'; 


import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'; 


const App = () => { 
  

  const [nome, setNome] = useState(''); 
  // Cria um estado chamado 'nome'. 
  // 'setNome' é a função para atualizar o valor de 'nome'.

  const [mensagem, setMensagem] = useState(''); 
  // Cria um estado chamado 'mensagem'. 
  // 'setMensagem' é a função para atualizar o valor de 'mensagem'.

  const lidarComClique = () => { 
    // Função chamada quando o botão for clicado.
    
    if (nome) { 
      // Verifica há um nome.
      setMensagem(`Olá, ${nome}!`); 
      // Se o nome foi digitado, exibe uma mensagem com o nome.
    } else { 
      setMensagem('Por favor, digite o seu nome.'); 
      //Não houver um nome, exibe uma mensagem pedindo para digitar.
    }
  };

  return (
    <View style={styles.container}> 
    
    
      <Image 
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} 
       
        style={styles.logo} 
        // Aplica o estilo definido em 'styles.logo'.
      />
      
      <Text style={styles.titulo}>Exemplo Interativo</Text> 
      // Exibe o título "Exemplo Interativo" com o estilo definido em 'styles.titulo'.
      
      <TextInput 
        style={styles.input} 
        // Exibe um campo de entrada de texto'.
        
        placeholder="Digite seu nome" 
        // Exibe o texto "Digite seu nome" dentro do campo de entrada.
        
        onChangeText={setNome} 
        // A função setNome é chamada toda vez que o texto no campo de entrada mudar, atualizando o estado 'nome'.
        
        value={nome} 
        //o campo sempre exibe o valor atual de 'nome'.
      />

      <Button title="Enviar" onPress={lidarComClique} /> 
      // Exibe um botão com o título "Enviar" e chama a função 'lidarComClique' quando pressionado.

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null} 
      {/* exibe mensagem se não for uma string vazia, a mensagem é exibida dentro da tag text */}
      
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

