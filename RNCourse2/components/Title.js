import { StyleSheet, Text } from "react-native";

function Title({children, style}) {
	let finalStyles = [styles.title];
	if (style !== Array)
		finalStyles.push(style);
	else finalStyles = finalStyles.concat(style);

    return (
    <Text style={finalStyles}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
		maxWidth: "80%",

		color: "white",
		fontSize: 24,
		textAlign: "center",

		borderWidth: 2,
		borderColor: "white",
		padding: 12,
	},
});