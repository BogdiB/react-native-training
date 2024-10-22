import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [goalList, setGoalList] = useState([]);

	function addGoal(goal) {
		setGoalList((currentGoals) => [...currentGoals, goalText]);
	}

	function deleteGoalHandler(index) {
		setGoalList((currentGoals) => {
			return currentGoals.splice(index, 1);
		});
	}

	function onItemPressed(id) {
		deleteGoalHandler(id);
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoal} />

			<View style={styles.listContainer}>
				<FlatList
					data={goalList}
					renderItem={(item) => {return <GoalItem text={item.item} index={item.index} onPress={onItemPressed} />}}
					keyExtractor={(item, index) => index}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: 'brown',
		paddingTop: 10,
		paddingHorizontal: 50,
	},

	listContainer: {
		flex: 4,
		marginBottom: 10,
	},
});
