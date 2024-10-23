import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
	const [goalText, setGoalText] = useState("");

	function goalInputHandler(text) {
		setGoalText(text);
	}

	function addGoalHandler() {
		if (goalText === "")
			return;
		props.onAddGoal();
		setGoalText("");
	}

	return (
	<Modal visible={props.visible} animationType="slide">
		<View style={styles.inputContainer}>
			<Image source={require('../assets/images/goal.png')} style={styles.image} />
			<TextInput
				style={styles.textInput}
				placeholder='Course Goal'
				onChangeText={goalInputHandler}
				value={goalText}
			/>

			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button title='Add Goal' onPress={addGoalHandler} />
				</View>
				<View style={styles.button}>
					<Button title="Cancel" onPress={props.onCancel} />
				</View>
			</View>
		</View>
	</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		padding: 16,
		marginBottom: 24,
		backgroundColor: "#311b6b",
	},

	image: {
		width: 100,
		height: 100,
	},

	textInput: {
		width: "100%",
		padding: 8,

		borderWidth: "1",
		borderColor: "#cccccc",
		borderRadius: 6,
	},

	buttonContainer: {
		flexDirection: "row",
		marginTop: 16,
	},

	button: {
		width: 100,
		marginHorizontal: 8,
	},
});