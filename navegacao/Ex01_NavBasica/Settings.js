import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Settings({ navigation }: Props) {
    return (
        <View style={style.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}