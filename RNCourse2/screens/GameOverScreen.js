import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../consts/colors";
import CustomButton from "../components/CustomButton";

function GameOverScreen(props) {
	return (
	<View style={styles.container}>
		<Title>GAME OVER!</Title>
		<View style={styles.imageContainer}>
			<Image style={styles.image} source={require("../assets/images/success.png")} />
		</View>

		<View>
			<Text style={styles.text}>Your phone needed <Text style={styles.specialText}>{props.rounds}</Text> rounds to guess the number <Text style={styles.specialText}>{props.chosenNumber}</Text>.</Text>
		</View>

		<CustomButton onPress={props.goToMenu}>Menu</CustomButton>
	</View>
	);
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		padding: 24,
	},

	imageContainer: {
		width: deviceWidth < 380 ? 150 : 300,
		height: deviceWidth < 380 ? 150 : 300,

		margin: 36,

		borderRadius: deviceWidth < 380 ? 75 : 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		
		overflow: "hidden",
	},

	image: {
		width: "100%",
		height: "100%",
	},

	text: {
		fontFamily: "open-sans",
		fontSize: 24,
		textAlign: "center",

		marginBottom: 15,
	},

	specialText: {
		color: Colors.primary500,
	},
});