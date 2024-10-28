import { StyleSheet, View, Text, Alert, FlatList, Dimensions, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";

import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import GameLogger from "../components/GameLogger";
import Colors from "../consts/colors";
import Card from "../components/Card";
import GuessLogItem from "../components/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;
function generateRandomBetween(min, max, exclude) {
	const randomNumber = Math.floor(Math.random() * (max - min)) + min + 1;
  
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return randomNumber;
}

let roundGuessesLength = 1;

function GameScreen(props) {
	const initialGuess = generateRandomBetween(1, 100, props.userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [roundGuesses, setRoundGuesses] = useState([initialGuess]);
	const {width, height} = useWindowDimensions();

	function alertWrongDirection() {
		Alert.alert("Do not lie!", "You gave a wrong direction...", [{text: "Sorry", style: "cancel"}]);
	}

	function reset() {
		minBoundary = 1;
		maxBoundary = 100;
	}

	function nextGuess(direction) {
		if (direction === "lower") {
			if (currentGuess < props.userNumber) {
				alertWrongDirection();
				return;
			}
			
			maxBoundary = currentGuess - 1;
		} else if (direction === "greater") {
			if (currentGuess > props.userNumber) {
				alertWrongDirection();
				return;
			}

			minBoundary = currentGuess + 1;
		}

		let rnd = minBoundary !== maxBoundary ? generateRandomBetween(minBoundary, maxBoundary) : minBoundary;
		setCurrentGuess(rnd);
		setRoundGuesses((prevRoundGuesses) => [rnd, ...prevRoundGuesses]);
		roundGuessesLength++;
		props.incrementGuesses();
	}

	useEffect(() => {
		if (currentGuess === props.userNumber) {
			props.onGameOver();
			roundGuessesLength = 1;
		}
	}, [currentGuess, props.userNumber, props.onGameOver]);

	useEffect(reset, []);

	let content = 
	<>
		<GameLogger>{currentGuess}</GameLogger>

		<Card>
			<Text style={styles.text}>Higher or Lower?</Text>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<CustomButton onPress={nextGuess.bind(this, "lower")}>-</CustomButton>
				</View>
				<View style={styles.button}>
					<CustomButton onPress={nextGuess.bind(this, "greater")}>+</CustomButton>
				</View>
			</View>
		</Card>
	</>;
	
	return (
	<View style={styles.container}>
		<Title>Computer Guess!</Title>
		{content}
		<View style={styles.loggerContainer}>
			<FlatList
				data={roundGuesses}
				renderItem={(itemData) => <GuessLogItem roundNumber={roundGuessesLength - itemData.index} guess={itemData.item} />}
				keyExtractor={(item) => item}
			/>
		</View>
	</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		alignItems: "center",
	},

	buttonContainer: {
		flexDirection: "row",
	},

	text: {
		color: Colors.secondary300,
		fontFamily: "open-sans",
		fontSize: 24,
	},

	button: {
		flex: 1,
	},

	loggerContainer: {
		flex: 1,
		padding: 16,
	},
});