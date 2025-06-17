import React from "react";
import { View, Text} from "react-native";
import styles from "./styles";

export default function Box({ children }{
    return (
        <View style={styles.box}>
        <Text styl{styles.boxText}>{children}</Text>
        </View>
    )
);
}