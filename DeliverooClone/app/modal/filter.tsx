import { useState } from "react";
import { StyleSheet, View, Text, Pressable, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Colors from "@/constants/Colors";
import categories from "@/assets/data/filter.json";


interface Category {
	name: string,
	count: number,
	checked?: boolean,
};

const categoriesLength = categories.length;

const ItemBox = () => (
<>
<View style={styles.itemBoxContainer}>
	<Pressable style={({pressed}) => [styles.item, styles.itemBottomBorder, pressed ? styles.buttonOnPress : null]}>
		<Ionicons style={{marginRight: 10}} name="arrow-down-outline" size={20} color={Colors.medium}/>
		<View style={{flex: 1}}>
			<Text style={styles.itemText}>Sort</Text>
			<Text style={{color: Colors.mediumDark, fontSize: 14}}>Recommended</Text>
		</View>
		<Ionicons name="chevron-forward-outline" size={22} color={Colors.primary}/>
	</Pressable>

	<Pressable style={({pressed}) => [styles.item, styles.itemBottomBorder, pressed ? styles.buttonOnPress : null]}>
		<Ionicons style={{marginRight: 10}} name="fast-food-outline" size={20} color={Colors.medium}/>
		<Text style={styles.itemText}>Hygiene rating</Text>
		<Ionicons name="chevron-forward-outline" size={22} color={Colors.primary}/>
	</Pressable>

	<Pressable style={({pressed}) => [styles.item, styles.itemBottomBorder, pressed ? styles.buttonOnPress : null]}>
		<Ionicons style={{marginRight: 10}} name="pricetag-outline" size={20} color={Colors.medium}/>
		<Text style={styles.itemText}>Offers</Text>
		<Ionicons name="chevron-forward-outline" size={22} color={Colors.primary}/>
	</Pressable>

	<Pressable style={({pressed}) => [styles.item, pressed ? styles.buttonOnPress : null]}>
		<Ionicons style={{marginRight: 10}} name="nutrition-outline" size={20} color={Colors.medium}/>
		<Text style={styles.itemText}>Dietary</Text>
		<Ionicons name="chevron-forward-outline" size={22} color={Colors.primary}/>
	</Pressable>
</View>

<Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 20}}>Categories</Text>
</>
);

function Filter() {
	const navigation = useNavigation();
	const [items, setItems] = useState<Category[]>(categories);

	return (
	<View style={styles.container}>
		<FlatList
			style={styles.list}
			data={items}
			renderItem={({ item, index }) => (
			<View style={[styles.itemContainer, index === 0 ? {borderTopLeftRadius: 8, borderTopRightRadius: 8} : null, index === categoriesLength - 1 ? {borderBottomLeftRadius: 8, borderBottomRightRadius: 8} : null, , index !== categoriesLength - 1 ? styles.itemBottomBorder : null]}>
				<Text style={styles.itemText}>{item.name} <Text style={{color: Colors.medium}}>({item.count})</Text></Text>
				<BouncyCheckbox
					style={styles.checkbox}
					fillColor={Colors.primary}
					unFillColor="white"
					iconStyle={styles.checkboxIcon}
					innerIconStyle={[styles.checkboxIcon, item.checked ? styles.checkboxInnerIcon : null]}
					useBuiltInState={false}
					onPress={() => {
						const isChecked = items[index].checked;
	
						const updatedItems = items.map((currentItem) => {
							if (currentItem.name === items[index].name)
								item.checked = !isChecked;
							
							return currentItem;
						});
						
						setItems(updatedItems);
					}}
					isChecked={items[index].checked}
				/>
			</View>
			)}
			keyExtractor={(item) => item.name}
			ListHeaderComponent={<ItemBox />}
			refreshing={false}
			contentContainerStyle={{}}
		/>
		<View style={{height: 85}}/>

		<View style={styles.footer}>
			<Pressable
				style={({pressed}) => [styles.footerButton, pressed ? styles.buttonOnPress : null]}
				onPress={() => {navigation.goBack();}}
			>
				<Text style={styles.footerButtonText}>Done</Text>
			</Pressable>
		</View>
	</View>
	);
}

export default Filter;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		padding: 24,

		backgroundColor: Colors.lightGrey,
	},

	list: {
		height: 50,
		borderWidth: 2,
		borderColor: "red",
	},

	buttonOnPress: {
		opacity: 0.65,
	},

	itemBoxContainer: {
		backgroundColor: "white",

		padding: 8,
		marginBottom: 16,

		borderRadius: 8,
	},

	itemContainer: {
		flexDirection: "row",

		backgroundColor: "white",

		padding: 10,
	},

	item: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",

		// backgroundColor: Colors.lightGrey,

		paddingVertical: 13,
	},

	itemBottomBorder: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.grey,
	},

	itemText: {
		flex: 1,
		fontSize: 16,
	},

	checkbox: {
		height: "100%", // without this, the checkbox height is like 5 times bigger on Android
	},

	checkboxIcon: {
		borderColor: Colors.medium,
		borderRadius: 4,
		borderWidth: 2,
	},

	checkboxInnerIcon: {
		borderColor: Colors.primary,
	},

	footer: {
		height: 100,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,

		backgroundColor: Colors.lightGrey,

		borderTopWidth: 1,
		borderTopColor: Colors.grey,

		elevation: 5,
		shadowColor: "black",
		shadowRadius: 3,
		shadowOffset: {width: 0, height: -1},
		shadowOpacity: 0.1,
	},

	footerButton: {
		margin: 10,
		padding: 10,

		borderRadius: 4,

		backgroundColor: Colors.primary,
	},

	footerButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",

		textAlign: "center",
	},
});