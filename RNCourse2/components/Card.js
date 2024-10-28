import { StyleSheet, View, Dimensions } from "react-native";

function Card({children}) {
    return (
    <View style={styles.card}>{children}</View>
    );
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
		alignItems: "center",

		marginTop: deviceWidth < 380 ? 18 : 36,
		marginHorizontal: 20,
		padding: 16,

		borderWidth: 0,
		borderRadius: 5,
		borderColor: "black",

		backgroundColor: "#4e0329",
		elevation: 20,
		shadowColor: "black",
		shadowOffset: {width: 2, height: 2},
		shadowRadius: 6,
		shadowOpacity: 0.8,
	},
});