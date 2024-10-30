import { useRef } from "react";
import { StyleSheet, SafeAreaView, View, Pressable, Image, Platform, StatusBar, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import SearchBar from "./SearchBar";
import BottomSheet from "./BottomSheet";

import 'react-native-gesture-handler';


function CustomHeader() {
	const bottomSheetRef = useRef<BottomSheetModal>(null);

	function openModal() {
		bottomSheetRef.current?.present();
	}

	return (
	<SafeAreaView style={styles.safeArea}>
		<BottomSheet ref={bottomSheetRef} />

		<View style={styles.headerContainer}>
			<Pressable style={({pressed}) => [styles.button, styles.shadow, pressed ? styles.buttonOnPress : null]} onPress={openModal}>
				<Image style={styles.image} source={require("@/assets/images/bike.png")} />
			</Pressable>

			<Pressable style={({pressed}) => [styles.titleContainer, pressed ? styles.buttonOnPress : null]} onPress={openModal}>
				<Text style={styles.title}>Delivery · Now</Text>
				
				<View style={styles.subtitle}>
					<Text style={styles.subtitleLocation}>Timisoara</Text>
					<Ionicons style={styles.subtitleIcon} name="chevron-down" size={20} color={Colors.primary} />
				</View>
			</Pressable>

			<Pressable style={({pressed}) => [pressed? styles.buttonOnPress : null]}>
				<Ionicons name="person-outline" size={20} color={Colors.primary} />
			</Pressable>
		</View>

		<SearchBar />
	</SafeAreaView>
	);
}

export default CustomHeader;

const HeaderStyles = {
	backgroundColor: "white",
	height: 60, // must be divisible by 4
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,

		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},

	headerContainer: {
		height: HeaderStyles.height,
		flexDirection: "row",
		gap: 20,
		justifyContent: "space-between",
		alignItems: "center",
		
		backgroundColor: HeaderStyles.backgroundColor,
		
		paddingHorizontal: 20,

		borderBottomWidth: 1,
		borderBlockColor: "grey",
	},

	shadow: {
		backgroundColor: HeaderStyles.backgroundColor,

		elevation: 5,
		shadowColor: "black",
		shadowOpacity: 0.35,
		shadowRadius: 4,
		shadowOffset: {width: 1, height: 2},
	},

	button: {
		borderRadius: HeaderStyles.height / 4,

		overflow: Platform.select({android: "hidden", ios: "visible"}),
	},

	buttonOnPress: {
		opacity: 0.65,
	},

	image: {
		width: HeaderStyles.height / 2,
		height: HeaderStyles.height / 2,

		borderRadius: HeaderStyles.height / 4,
	},

	titleContainer: {
		flex: 1,
	},

	title: {
		color: Colors.medium,
		fontSize: 14,
	},

	subtitle: {
		flexDirection: "row",
		alignItems: "center",
	},

	subtitleLocation: {
		fontSize: 18,
		fontWeight: "bold",
	},

	subtitleIcon: {
		paddingHorizontal: 5,
		paddingTop: 3,
	},

	profileButton: {
		backgroundColor: Colors.lightGrey,
		padding: 10,
		borderRadius: 50,
	},
});