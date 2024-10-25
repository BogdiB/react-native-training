import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Colors from "../consts/colors";

function StartGameScreen(props) {
	const [enteredNumber, setEnteredNumber] = useState("");

	function textInputHandler(text) {
		setEnteredNumber(text);
	}

	function resetInput() {
		setEnteredNumber("");
	}

	function confirmInput() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
			Alert.alert("Invalid number!", "Input has to be a number between 0 and 99!", [{text:"Okay", style: "destructive", onPress: resetInput}]);
			return ;
		}

		props.onNumberChosen(chosenNumber);
	}

	return (
	<View style={styles.container}>
		<TextInput
			style={styles.textInput}
			maxLength={2}
			keyboardType="number-pad"
			autoCorrect={false}
			autoCapitalize="none"
			autoComplete="off"
			importantForAutofill="no"
			onChangeText={textInputHandler}
			value={enteredNumber}
		/>
		<View style={styles.buttonContainer}>
			<View style={styles.button}>
				<CustomButton onPress={resetInput}>Reset</CustomButton>
			</View>
			<View style={styles.button}>
				<CustomButton onPress={confirmInput}>Confirm</CustomButton>
			</View>
		</View>
	</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",

		marginTop: 50,
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

	textInput: {
		height: 50,
		width: 50,

		color: Colors.secondary300,
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",

		marginVertical: 10,

		borderBottomWidth: 2,
		borderBottomColor: Colors.secondary300,
	},

	text: {
		fontSize: 20,
	},

	buttonContainer: {
		flexDirection: "row",
	},

	button: {
		flex: 1,
	}
});