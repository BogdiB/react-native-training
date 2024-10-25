import { StyleSheet, View, Text } from "react-native";
import Colors from "../consts/colors";

function GameLogger({children}) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default GameLogger;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

        margin: 24,
        padding: 24,

        borderWidth: 4,
        borderColor: Colors.secondary300,
        borderRadius: 8,
    },

    numberText: {
        color: Colors.secondary300,
        fontSize: 36,
        fontWeight: "bold",
    },
});