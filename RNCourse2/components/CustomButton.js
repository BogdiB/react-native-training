import { View, Text } from "react-native";

function CustomButton(props) {
	return (
	<View>
		<Text>{props.children}</Text>
	</View>
	);
}

export default CustomButton;