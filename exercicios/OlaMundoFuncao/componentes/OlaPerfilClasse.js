import React, { Component } from "react";
import { Text, View } from 'react-native';

export default class OlaPerfilClasse extends Component {
    render() {
        return (
            <View>
                <Text>Nome: {this.props.nome}</Text>
                <Text>Endereço: {this.props.endereco}</Text>
                <Text>Telefone: {this.props.telefone}</Text>
            </View>
        );
    }
}
