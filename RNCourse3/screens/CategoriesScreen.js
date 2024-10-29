import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {
	function renderItemCategory(itemData) {
		function pressHandler() {
			navigation.navigate("MealsOverview", {
				categoryId: itemData.item.id,
			});
		}
	
		return (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
			onPress={pressHandler}
		/>
		);
	}

	return (
	<FlatList
		data={CATEGORIES}
		renderItem={renderItemCategory}
		keyExtractor={(item) => item.id}
		numColumns={2}
	/>
	);
}

export default CategoriesScreen;

const styles = StyleSheet.create({
});