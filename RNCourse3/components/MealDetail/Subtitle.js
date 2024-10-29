import { StyleSheet, View, Text } from "react-native";

function Subtitle({ color, children }) {
	return (
	<View style={[styles.subtitleContainer, color ? {borderBottomColor: color} : null]}>
		<Text style={[styles.subtitle, color ? {color: color} : null]}>{children}</Text>
	</View>
	);
}

export default Subtitle;

const styles = StyleSheet.create({
	subtitleContainer: {
		margin: 4,
		marginHorizontal: 24,
		padding: 6,

		borderBottomWidth: 2,
		borderBottomColor: "#e2b497",
	},

	subtitle: {
		color: "#e2b497",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});