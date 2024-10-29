// import { useContext } from "react";
import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";


function MealDetailScreen({ route, navigation }) {
	// const favoriteMealsContext = useContext(FavoritesContext);
	const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
	const dispatch = useDispatch();
	
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	
	const mealIsFavorite = favoriteMealsIds.includes(mealId);

	function headerButtonOnPressed() {
		if (mealIsFavorite) {
			// favoriteMealsContext.removeFavorite(mealId);
			dispatch(removeFavorite({id: mealId}));
		} else {
			// favoriteMealsContext.addFavorite(mealId);
			dispatch(addFavorite({id: mealId}));
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