import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../consts/colors";

function CustomButton({children, onPress}) {
	function onPressHandler() { // in case I want to add something later
		onPress();
	}

	return (
	<View style={styles.container}>
		<Pressable
			style={({pressed}) => pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer}
			onPress={onPressHandler}
			android_ripple={{ color: Colors.primary600 }}
		>
			<Text style={styles.buttonText}>{children}</Text>
		</Pressable>
	</View>
	);
}

export default CustomButton;

const styles = StyleSheet.create({
	container: {
		margin: 4,
		
		overflow: "hidden",
	},
	
	innerContainer: {
		backgroundColor: Colors.primary500,
		
		borderRadius: 5,
		paddingVertical: 8,
		paddingHorizontal: 16,
		margin: 4,

		elevation: 2,
	},
	
	buttonText: {
		color: "white",
		fontFamily: "open-sans",
		fontSize: 20,
		textAlign: "center",
	},

	pressed: {
		opacity: 0.75,
	},
});