import { StyleSheet, View, Text, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetails from "./MealDetails";


function MealItem({ id ,title, imageURL, duration, complexity, affordability }) {
	const navigation = useNavigation();

	function pressHandler() {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	}
	
	return (
	<View style={styles.mealItem}>
		<Pressable
			style={({pressed}) => [styles.innerContainer, pressed ? styles.buttonPressed : null]}
			android_ripple={{color: "#ccc"}}
			onPress={pressHandler}
		>
			<View>
				<Image source={{uri: imageURL}} style={styles.image} />
				<Text style={styles.title}>{title}</Text>
			</View>

			<MealDetails
				duration={duration}
				complexity={complexity}
				affordability={affordability}
			/>
		</Pressable>
	</View>
	);
}

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		backgroundColor: "white",

		margin: 16,
		borderRadius: 8,

		elevation: 4,
		shadowColor: "black",
		shadowRadius: 8,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.35,
		
		overflow: Platform.select({android: "hidden", ios: "visible"}),
	},

	buttonPressed: {
		opacity: 0.5,
	},

	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},

	image: {
		width: "100%",
		height: 200,
	},

	title: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",

		margin: 8,
	},
});