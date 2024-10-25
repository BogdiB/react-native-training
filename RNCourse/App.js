import { useState } from 'react';
import { FlatList, StyleSheet, View, Button, StatusBar } from 'react-native';
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

	function addGoal(goalText) {
		setGoalList((currentGoals) => [...currentGoals, goalText]);
		endAddGoalHandler();
	}

	function deleteGoal(givenIndex) {
		setGoalList((currentGoals) => {
			return currentGoals.filter((_, index) => index !== givenIndex);
		});
	}

	function onItemPressed(id) {
		deleteGoal(id);
	}

	return (
	<>
		<StatusBar hidden={false} barStyle='dark-content' />
		<View style={styles.appContainer}>
			<View style={styles.button}>
				<Button title='Add New Goal' color="red" onPress={startAddGoalHandler} />
			</View>
			<GoalInput onAddGoal={addGoal} visible={isModalVisible} onCancel={endAddGoalHandler} />

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

	button: {
		marginTop: 30
	},

	listContainer: {
		flex: 4,
		marginBottom: 10,
	},
});
