import { StyleSheet, Text, View } from "react-native";

function List({ data, style, textStyle }) {
	return data.map((item) => (
	<View style={[styles.listContainer, style ? style : null]} key={item}>
		<Text style={[styles.listItem, textStyle ? textStyle : null]}>{item}</Text>
	</View>
	));
}

export default List;

const styles = StyleSheet.create({
	listContainer: {
		backgroundColor: "#e2b497",

		paddingHorizontal: 8,
		paddingVertical: 4,
		marginHorizontal: 12,
		marginVertical: 4,

		borderRadius: 6,
	},

	listItem: {
		color: "#351401",
		textAlign: "center",
	},
});