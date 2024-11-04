import SearchBar from "@/components/SearchBar";
import { StyleSheet, View, Text } from "react-native";


function LocationSearch() {
	return (
	<View>
		<SearchBar placeholder="Search or move the map" />
		<Text>No access to Google Maps API</Text>
	</View>
	);
}

export default LocationSearch;

const styles = StyleSheet.create({
});