import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";

import { restaurants } from "@/assets/data/home";
import Colors from "@/constants/Colors";


function Restaurants() {
	return (
	<ScrollView
		horizontal
		style={styles.container}
		contentContainerStyle={{padding: 15}}
		showsHorizontalScrollIndicator={false}
	>
		{restaurants.map((item: any, index: number) => (
		<Link href={"/modal/details"} asChild key={index}>
			<Pressable style={({pressed}) => [pressed ? styles.buttonOnPress : null]}>
				<View style={styles.restaurantCard}>
					<Image source={item.img} style={styles.restaurantImage} />
					<Text style={styles.restaurantText}>{item.name}</Text>
					<Text style={styles.restaurantRatingText}>{item.rating} {item.ratings}</Text>
					<Text style={styles.restaurantDistanceText}>{item.distance}</Text>
				</View>
			</Pressable>
		</Link>
		))}
	</ScrollView>
	);
}

export default Restaurants;

const styles = StyleSheet.create({
	container: {
	},

	restaurantCard: {
		flex: 1,
		backgroundColor: "white",

		marginEnd: 10,

		elevation: 3,
		shadowColor: "black",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
	},

	restaurantImage: {
		width: 250,
		height: 200,
	},

	restaurantText: {
		fontSize: 14,
		fontWeight: "bold",

		padding: 5,
	},

	restaurantRatingText: {
		color: Colors.green,
		fontSize: 12,
		
		padding: 2,
	},

	restaurantDistanceText: {
		color: Colors.medium,
		fontSize: 12,
		
		padding: 2,
	},

	buttonOnPress: {
		opacity: 0.65,
	},
});