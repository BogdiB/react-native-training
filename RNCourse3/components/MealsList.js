import { StyleSheet, View, FlatList } from "react-native";

import MealItem from "./MealItem";


function MealsList({data}) {
	function renderMealItem(itemData) {
		const item = itemData.item;

		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageURL: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};

		return (
		<MealItem
			{...mealItemProps}
		/>
		);
	}

	return (
	<View>
		<FlatList
			data={data}
			renderItem={renderMealItem}
			keyExtractor={(item) => item.id}
		/>
	</View>
	);
}

export default MealsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});