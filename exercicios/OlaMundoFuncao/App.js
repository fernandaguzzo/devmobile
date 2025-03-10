import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundoFuncao from './componentes/OlaMundoFuncao';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundoFuncao nome="Fernanda" endereco="Exemplo" telefone="exemplo" />
      <OlaPerfilClasse nome="Fernanda" endereco="Exemplo" telefone="exemplo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
