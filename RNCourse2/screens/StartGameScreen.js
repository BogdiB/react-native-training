import { View, TextInput, StyleSheet, Alert, Text, Dimensions } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Colors from "../consts/colors";
import Card from "../components/Card";

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
	<Card style={styles.container}>
		<Text style={styles.text}>Enter a number:</Text>
		<TextInput
			style={styles.textInput}
			onChangeText={textInputHandler}
			value={enteredNumber}
			keyboardType="number-pad"
			maxLength={2}
			autoCorrect={false}
			autoCapitalize="none"
			autoComplete="off"
			importantForAutofill="no"
		/>

		<View style={styles.buttonContainer}>
			<View style={styles.button}>
				<CustomButton onPress={resetInput}>Reset</CustomButton>
			</View>
			<View style={styles.button}>
				<CustomButton onPress={confirmInput}>Confirm</CustomButton>
			</View>
		</View>
	</Card>
	);
}

export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		marginTop: deviceHeight < 380 ? 10 : 20,
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
		color: Colors.secondary300,
		fontSize: 20,
		fontWeight: "bold",

		marginTop: 8,
	},

	buttonContainer: {
		flexDirection: "row",
	},

	button: {
		flex: 1,
	}
});