import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";

import { categories } from "@/assets/data/home";


function Categories() {
	return (
	<ScrollView
		horizontal
		style={styles.container}
		contentContainerStyle={{padding: 15}}
		showsHorizontalScrollIndicator={false}
	>
		{categories.map((category, index) => (
		<Link href={"/"} asChild key={index}>
			<View style={styles.categoryCard}>
				<Pressable style={({pressed}) => [pressed ? styles.buttonOnPress : null]}>
					<Image source={category.img} style={styles.categoryImage} />
					<Text style={styles.categoryText}>{category.text}</Text>
				</Pressable>
			</View>
		</Link>
		))}
	</ScrollView>
	);
}

export default Categories;

const styles = StyleSheet.create({
	container: {
	},

	categoryCard: {
		flex: 1,
		backgroundColor: "white",

		marginEnd: 10,

		elevation: 3,
		shadowColor: "black",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
	},

	categoryImage: {
		width: 100,
		height: 70,
	},

	categoryText: {
		fontSize: 14,
		fontWeight: "bold",

		padding: 5,
	},

	buttonOnPress: {
		opacity: 0.65,
	},
});