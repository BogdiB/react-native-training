import { useState } from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [goalList, setGoalList] = useState([]);

	function startAddGoalHandler() {
		setIsModalVisible(true);
	}
	
	function endAddGoalHandler() {
		setIsModalVisible(false);
	}

	function addGoal(goal) {
		setGoalList((currentGoals) => [...currentGoals, goalText]);
	}

	function deleteGoal(index) {
		setGoalList((currentGoals) => {
			return currentGoals.splice(index, 1);
		});
	}

	function onItemPressed(id) {
		deleteGoal(id);
	}

	return (
	<>
		<StatusBar style='light'/>
		<View style={styles.appContainer}>
			<Button title='Add New Goal' color="red" onPress={startAddGoalHandler} onCancel={endAddGoalHandler} />
			<GoalInput onAddGoal={addGoal} visible={isModalVisible} />

			<View style={styles.listContainer}>
				<FlatList
					data={goalList}
					renderItem={(item) => {return <GoalItem text={item.item} index={item.index} onPress={onItemPressed} />}}
					keyExtractor={(item, index) => index}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	</>
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
