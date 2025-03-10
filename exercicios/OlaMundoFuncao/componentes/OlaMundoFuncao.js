import React from "react";
import { Text, View } from 'react-native';

export default function OlaMundoFuncao(props){
    return (
        <View>
        <Text>Nome: {props.nome}</Text>
        <Text>Endereço: {props.endereco}</Text>
        <Text>Telefone: {props.telefone}</Text>
        </View>
    )
    
}