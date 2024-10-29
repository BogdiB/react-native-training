import { StyleSheet, View } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


const DUMMY_EXPENSES = [
	{
		id: "e1",
		description: "A pair of shoes",
		amount: 59.99,
		date: new Date("2024-10-19"),
	},
	{
		id: "e2",
		description: "A pair of trousers",
		amount: 89.29,
		date: new Date("2023-06-02"),
	},
];

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
	<View>
		<ExpensesSummary
			expenses={expenses}
			periodName={expensesPeriod}
		/>

		<ExpensesList
			data={expenses}
		/>
	</View>
	);
}

export default ExpensesOutput;

const styles = StyleSheet.create({
});