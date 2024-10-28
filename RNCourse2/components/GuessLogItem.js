import { View, Text, StyleSheet } from "react-native";
import Colors from "../consts/colors";

function GuessLogItem({roundNumber, guess}) {
    return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Computer Guess: {guess}</Text>
    </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.secondary300,

        marginVertical: 8,
        padding: 12,

        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,

        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },

    itemText: {
        fontFamily: "open-sans"
    },
});