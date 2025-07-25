import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "ghostwhite",
        alignItems: "center",
        justifyContent: "space-around",
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight },
        }),
    },

    box: {
        height: 100,
        justifyContent: "center",
        alignSelf: "stretch",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
});
