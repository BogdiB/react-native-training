import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
	return (
	<View style={styles.listItem}>
		<Pressable
			onPress={props.onPress.bind(this, props.index)}
			android_ripple={{color: "#dddddd"}}
			style={({pressed}) => {if (pressed) return styles.pressedItem;}}
		>
			<Text style={styles.listItemText}>{props.text}</Text>
		</Pressable>
	</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	listItem: {
		margin: 8,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},

	pressedItem: {
		opacity: 0.5,
	},

	listItemText: {
		color: "lightgrey",
	}
});