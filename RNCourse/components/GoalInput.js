import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
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
	<Modal>
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder='Course Goal'
				onChangeText={goalInputHandler}
				value={goalText}
			/>
			<Button
				title='Add Goal'
				onPress={addGoalHandler}
				/>
		</View>
	</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},

	textInput: {
		borderWidth: "1",
		borderColor: "#cccccc",
		width: "80%",
		padding: 8,
	},
});