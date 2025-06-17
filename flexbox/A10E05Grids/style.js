import { Platform, StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "ghostwhite",
        alignItems: "center",
        ...Platform.select({
            ios: { paddingTop: 40},
            android: { StatusBar.currentHeight},
        }),
    },

    box: {
        height: 100,
        width: 100,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderStyle: "dashed",
        borderColor: "darkslategray",
        margin: 10,        
    },
    boxtText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
});