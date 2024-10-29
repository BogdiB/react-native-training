import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}) {
	return (
	<View style={styles.gridItem}>
		<Pressable
			android_ripple={{color: "#ccc"}}
			style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
			onPress={onPress}
		>
			<View style={[styles.innerContainer, {backgroundColor: color}]}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</Pressable>
	</View>
	);
}

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		backgroundColor: "white", // for ios shadow

		margin: 16,
		height: 150,
		borderRadius: 8,

		elevation: 4,
		shadowColor: "black",
		shadowRadius: 3,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.25,

		overflow: Platform.select({android: "hidden", ios: "visible"}),
	},

	button: {
		flex: 1,
	},

	buttonPressed: {
		opacity: 0.5,
	},
	
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		padding: 16,

		borderRadius: 8,
	},

	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});