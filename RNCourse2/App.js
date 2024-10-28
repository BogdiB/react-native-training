import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './consts/colors';
import GameOverScreen from './screens/GameOverScreen';
import Title from './components/Title';

export default function App() {
	const [gameNumber, setGameNumber] = useState();
	const [isGameOver, setIsGameOver] = useState(true);
	const [guesses, setGuesses] = useState(0);

	const {width, height} = useWindowDimensions();
	const marginTopDistance = height < 380 ? 10 : 20;

	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	
	function startGame(pickedNumber) {
		setGuesses(0);
		setGameNumber(pickedNumber);
		setIsGameOver(false);
	}

	function endGame() {
		setIsGameOver(true);
	}

	function goToMenu() {
		setGameNumber();
	}

	function incrementGuesses() {
		setGuesses(guesses + 1);
	}
	
	let screen = <StartGameScreen onNumberChosen={startGame} />
	if (gameNumber) {
		screen = <GameScreen userNumber={gameNumber} incrementGuesses={incrementGuesses} onGameOver={endGame} />
	}
	if (gameNumber && isGameOver) {
		screen = <GameOverScreen rounds={guesses} chosenNumber={gameNumber} goToMenu={goToMenu} />;
	}

	return (
	<LinearGradient colors={[Colors.primary700, Colors.secondary300]} style={styles.rootScreen}>
		<ImageBackground
			source={require("./assets/images/dices.png")}
			resizeMode="cover"
			style={styles.rootScreen}
			imageStyle={styles.backgroundImage}
		>
			<SafeAreaView style={[styles.rootScreen, styles.AndroidSafeArea]}>
				{!gameNumber && <Title style={[styles.appTitle, {marginTop: marginTopDistance}]}>Guess My Number</Title>}
				{screen}
			</SafeAreaView>
		</ImageBackground>
	</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
		alignItems: "center",
	},

	backgroundImage: {
		opacity: 0.15,
	},

	AndroidSafeArea: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // or Platform.select({ios: 0, android: StatusBar.currentHeight})
	},

	appTitle: {
		fontFamily: "open-sans-bold",

		marginHorizontal: 50,
	},
});
