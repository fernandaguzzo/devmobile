import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Modal, Button } from 'react-native';

const EstoqueIndustrialScreen = () => {
  
  const [estoque, setEstoque] = useState([
    { id: '1', nome: 'Rolamento SKF 6205', quantidade: 25, localizacao: 'A3-B2', numeroPeca: 'RSKF6205', categoria: 'Rolamentos' },
    { id: '2', nome: 'Correia Dentada 5M-1120', quantidade: 18, localizacao: 'B1-C4', numeroPeca: 'CD5M1120', categoria: 'Correias' },
    { id: '3', nome: 'Sensor de Pressão PS-100', quantidade: 12, localizacao: 'C2-D1', numeroPeca: 'SPS100', categoria: 'Sensores' },
    { id: '4', nome: 'Válvula Solenoide 24V', quantidade: 8, localizacao: 'D3-A5', numeroPeca: 'VS24V', categoria: 'Válvulas' },
    { id: '5', nome: 'Junta Tórica 25x3mm', quantidade: 150, localizacao: 'E4-F2', numeroPeca: 'JT25X3', categoria: 'Juntas' },
    { id: '6', nome: 'Motor Elétrico 5HP', quantidade: 5, localizacao: 'F5-G1', numeroPeca: 'ME5HP', categoria: 'Motores' },
    { id: '7', nome: 'Placa Controladora V2.0', quantidade: 7, localizacao: 'G3-H4', numeroPeca: 'PCV2', categoria: 'Eletrônica' },
    { id: '8', nome: 'Cilindro Pneumático 100mm', quantidade: 15, localizacao: 'H2-I3', numeroPeca: 'CP100', categoria: 'Pneumática' },
    { id: '9', nome: 'Termopar Tipo K', quantidade: 30, localizacao: 'I5-J1', numeroPeca: 'TTK', categoria: 'Instrumentação' },
    { id: '10', nome: 'Filtro de Óleo FO-302', quantidade: 22, localizacao: 'J4-K2', numeroPeca: 'FO302', categoria: 'Filtros' },
  ]);

 
  const [modalVisible, setModalVisible] = useState(false);
  const [edicaoAtiva, setEdicaoAtiva] = useState(false);
  const [itemAtual, setItemAtual] = useState(null);
  const [formulario, setFormulario] = useState({
    nome: '',
    quantidade: '',
    localizacao: '',
    numeroPeca: '',
    categoria: ''
  });

  
  const abrirModalNovo = () => {
    setEdicaoAtiva(false);
    setFormulario({
      nome: '',
      quantidade: '',
      localizacao: '',
      numeroPeca: '',
      categoria: ''
    });
    setModalVisible(true);
  };

  
  const abrirModalEdicao = (item) => {
    setEdicaoAtiva(true);
    setItemAtual(item);
    setFormulario({
      nome: item.nome,
      quantidade: item.quantidade.toString(),
      localizacao: item.localizacao,
      numeroPeca: item.numeroPeca,
      categoria: item.categoria
    });
    setModalVisible(true);
  };

  
  const salvarAlteracoes = () => {
    const novoItem = {
      ...formulario,
      quantidade: parseInt(formulario.quantidade),
      id: edicaoAtiva ? itemAtual.id : Math.random().toString()
    };

    if (edicaoAtiva) {
      setEstoque(estoque.map(item => item.id === itemAtual.id ? novoItem : item));
    } else {
      setEstoque([...estoque, novoItem]);
    }
    setModalVisible(false);
  };

  // Itens que irão ser colocados na lista
  const ItemLista = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text style={styles.tituloItem}>{item.nome}</Text>
        <Text style={styles.numeroPeca}>{item.numeroPeca}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
      </View>
      
      <View style={styles.dadosContainer}>
        <Text style={styles.quantidade}>Qtd: {item.quantidade}</Text>
        <Text style={styles.localizacao}>Local: {item.localizacao}</Text>
        <TouchableOpacity
          style={styles.botaoEditar}
          onPress={() => abrirModalEdicao(item)}
        >
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Controle de Estoque Industrial</Text>
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={abrirModalNovo}
        >
          <Text style={styles.textoBotao}>➕ Nova Peça</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={estoque}
        renderItem={ItemLista}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.lista}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalConteudo}>
            <Text style={styles.tituloModal}>
              {edicaoAtiva ? 'Editar Peça' : 'Nova Peça Industrial'}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nome da peça"
              value={formulario.nome}
              onChangeText={texto => setFormulario({...formulario, nome: texto})}
            />

            <TextInput
              style={styles.input}
              placeholder="Número da peça"
              value={formulario.numeroPeca}
              onChangeText={texto => setFormulario({...formulario, numeroPeca: texto})}
            />

            <TextInput
              style={styles.input}
              placeholder="Categoria"
              value={formulario.categoria}
              onChangeText={texto => setFormulario({...formulario, categoria: texto})}
            />

            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={formulario.quantidade}
              onChangeText={texto => setFormulario({...formulario, quantidade: texto})}
            />

            <TextInput
              style={styles.input}
              placeholder="Localização"
              value={formulario.localizacao}
              onChangeText={texto => setFormulario({...formulario, localizacao: texto})}
            />

            <View style={styles.botoesModal}>
              <Button
                title="Cancelar"
                color="#666"
                onPress={() => setModalVisible(false)}
              />
              <Button
                title="Salvar"
                color="#2c3e50"
                onPress={salvarAlteracoes}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 15,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#2c3e50',
    borderRadius: 5,
  },
  titulo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  lista: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,
  },
  infoContainer: {
    flex: 2,
  },
  dadosContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tituloItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  numeroPeca: {
    fontSize: 12,
    color: '#7f8c8d',
    marginVertical: 3,
  },
  categoria: {
    fontSize: 14,
    color: '#e67e22',
  },
  quantidade: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  localizacao: {
    fontSize: 12,
    color: '#3498db',
    marginVertical: 5,
  },
  botaoAdicionar: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 5,
  },
  botaoEditar: {
    backgroundColor: '#f1c40f',
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalFundo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalConteudo: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  tituloModal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  botoesModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default EstoqueIndustrialScreen;

