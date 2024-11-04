import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";


function SearchBar({ filter, placeholder }: {filter?: boolean, placeholder?: string}) {
	return (
	<View style={styles.searchContainer}>
		<View style={styles.searchSection}>
			<View style={styles.searchField}>
				<Ionicons style={styles.searchIcon} name="search-outline" size={20} color={Colors.medium} />
				<TextInput style={styles.input} placeholder={placeholder ? placeholder : "Restaurants, groceries, dishes"} placeholderTextColor="#cbb" />
			</View>

			{filter && <Link href={"/modal/filter"} asChild>
				<Pressable style={({pressed}) => [styles.optionButton, pressed ? styles.buttonOnPress : null]}>
					<Ionicons name="options-outline" size={20} color={Colors.primary} />
				</Pressable>
			</Link>}
		</View>
	</View>
	);
}

export default SearchBar;

const styles = StyleSheet.create({
	searchContainer: {
		height: 60,
		backgroundColor: "white",
	},

	searchSection: {
		flex: 1,
		flexDirection: "row",
		gap: 10,
		alignItems: "center",

		paddingHorizontal: 20,
	},

	searchField: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		
		backgroundColor: Colors.lightGrey,
		
		padding: 10,
		
		borderRadius: 8,
	},
	
	input: {
		width: "100%",
		color: Colors.mediumDark,
	},

	searchIcon: {
		paddingRight: 10,
	},

	optionButton: {
		padding: 5,
		borderRadius: 50,
	},

	buttonOnPress: {
		opacity: 0.65,
	},
});