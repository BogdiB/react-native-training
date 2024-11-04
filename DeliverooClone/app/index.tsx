import { StyleSheet, View, Text, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";


function Page() {
	return (
	<SafeAreaView style={styles.container}>
		<ScrollView>
			<Categories />
			<Text style={styles.header}>Top picks in your neighborhood</Text>
			<Restaurants />
			<Text style={styles.header}>Offers near you</Text>
			<Restaurants />
		</ScrollView>
	</SafeAreaView>
	);
}

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 55,

		backgroundColor: "white",

		paddingBottom: 50,
	},

	header: {
		fontSize: 18,
		fontWeight: "bold",

		paddingHorizontal: 16,
		marginBottom: 10,
	},
});