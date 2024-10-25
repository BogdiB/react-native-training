import { StyleSheet, View, Text, Alert } from "react-native";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import GameLogger from "../components/GameLogger";

let minBoundary = 1;
let maxBoundary = 100;
function generateRandomBetween(min, max, exclude) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return randomNumber;
}

function GameScreen(props) {
	const initialGuess = generateRandomBetween(1, 100, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	function alertWrongDirection() {
		Alert.alert("Do not lie!", "You gave a wrong direction...", [{text: "Sorry", style: "cancel"}]);
	}

	function nextGuess(direction) {
		if (direction === "lower") {
			if (currentGuess < props.userNumber) {
				alertWrongDirection();
				return;
			}
			
			maxBoundary = currentGuess;
		} else if (direction === "greater") {
			if (currentGuess > props.userNumber) {
				alertWrongDirection();
				return;
			}

			minBoundary = currentGuess;
		}

		setCurrentGuess(generateRandomBetween(minBoundary, maxBoundary, currentGuess));
		if (currentGuess === props.userNumber) {
			return ;
		}
	}
	
	return (
	<View style={styles.container}>
		<Title>Computer Guess!</Title>
		<GameLogger>{currentGuess}</GameLogger>

		<View>
			<Text>Higher or Lower?</Text>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<CustomButton onPress={nextGuess.bind(this, "lower")}>-</CustomButton>
				</View>
				<View style={styles.button}>
					<CustomButton onPress={nextGuess.bind(this, "greater")}>+</CustomButton>
				</View>
			</View>
		</View>
	</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	container: {
		padding: 12,
	},

	buttonContainer: {
		flexDirection: "row",
	},

	button: {
		flex: 1,
	},
});