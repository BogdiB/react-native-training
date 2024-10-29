import { StyleSheet, FlatList } from "react-native";


function ExpensesList({data}) {
	return (
	<FlatList
		data={data}
		style={styles.list}
	/>
	);
}

export default ExpensesList;

const styles = StyleSheet.create({
	list: {},
});