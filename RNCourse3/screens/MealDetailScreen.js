import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";


function MealDetailScreen({ route, navigation }) {
	const favoriteMealsContext = useContext(FavoritesContext);
	
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	
	const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

	function headerButtonOnPressed() {
		if (mealIsFavorite) {
			favoriteMealsContext.removeFavorite(mealId);
		} else {
			favoriteMealsContext.addFavorite(mealId);
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
				<IconButton
					onPress={headerButtonOnPressed}
					iconName={mealIsFavorite ? "star" : "star-outline"}
					color="white"
				/>
				);
			}
		});
	}, [navigation, headerButtonOnPressed]);

	return (
	<ScrollView style={styles.container} bounces={false}>
		<Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
		<Text style={styles.title}>{selectedMeal.title}</Text>

		<MealDetails
			duration={selectedMeal.duration}
			complexity={selectedMeal.complexity}
			affordability={selectedMeal.affordability}
			textStyle={styles.detailText}
		/>

		<View style={styles.listOuterContainer}>
			<View style={styles.listContainer}>
				<Subtitle>Ingredients</Subtitle>
				<List data={selectedMeal.ingredients} />
		
				<Subtitle>Steps</Subtitle>
				<List data={selectedMeal.steps} />
			</View>
		</View>
	</ScrollView>
	);
}

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,

		marginBottom: 35,
	},

	image: {
		width: "100%",
		height: 300,
	},

	title: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",

		margin: 8,
	},

	detailText: {
		color: "white"
	},

	listOuterContainer: {
		alignItems: "center",
	},

	listContainer: {
		width: "80%",
	},
});