import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./styles";
import { Props } from "./App";

export default function Home({ navigation }: Props) {
  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
____