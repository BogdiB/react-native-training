import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './consts/colors';

export default function App() {
	const [gameNumber, setGameNumber] = useState();
	
	function startGame(pickedNumber) {
		setGameNumber(pickedNumber);
	}
	
	let screen = <StartGameScreen onNumberChosen={startGame} />
	if (gameNumber) {
		screen = <GameScreen userNumber={gameNumber} />
	}

	return (
	<LinearGradient colors={[Colors.primary700, Colors.secondary300]} style={styles.rootScreen}>
		<ImageBackground
			source={require("./assets/images/dices.png")}
			resizeMode="cover"
			style={styles.rootScreen}
			imageStyle={styles.backgroundImage}
		>
			<SafeAreaView style={[styles.rootScreen, styles.AndroidSafeArea]}>{screen}</SafeAreaView>
		</ImageBackground>
	</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},

	backgroundImage: {
		opacity: 0.15,
	},

	AndroidSafeArea: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
