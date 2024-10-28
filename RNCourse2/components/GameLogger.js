import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../consts/colors";

function GameLogger({children}) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default GameLogger;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

        margin: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 12 : 24,

        borderWidth: 4,
        borderColor: Colors.secondary300,
        borderRadius: 8,
    },

    numberText: {
        color: Colors.secondary300,
        fontFamily: "open-sans-bold",
        fontSize: deviceWidth < 380 ? 28 : 36,
    },
});