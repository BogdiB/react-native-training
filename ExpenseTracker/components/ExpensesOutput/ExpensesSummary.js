import { StyleSheet, View, Text } from "react-native";


function ExpensesSummary({ expenses, periodName }) {
	const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);

	return (
	<View>
		<Text>{periodName}</Text>
		<Text>${expensesSum.toFixed(2)}</Text>
	</View>
	);
}

export default ExpensesSummary;

const styles = StyleSheet.create({
});