// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
// import { FavoritesContext } from "../store/context/favorites-context";

import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";


function FavoritesScreen() {
	// const favoriteMealsContext = useContext(FavoritesContext);
	const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
	const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
		<View style={styles.noFavoriteTextContainer}>
			<Text style={styles.noFavoriteText}>You have no favorite meals!</Text>
		</View>
		);
	} else {
		return (
		<MealsList data={favoriteMeals} />
		);
	}
}

export default FavoritesScreen;

const styles = StyleSheet.create({
	noFavoriteTextContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	noFavoriteText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
});