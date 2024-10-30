import { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useSharedValue } from "react-native-reanimated";
import Colors from "@/constants/Colors";


export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
	const snapPoints = useMemo(() => ["50%"], []);
	const { dismiss } = useBottomSheetModal();

	const renderBackdrop = useCallback((props: any) => (
		<BottomSheetBackdrop
			{...props}
			animatedIndex={useSharedValue(0)}
			animatedPosition={useSharedValue(0)}
			appearsOnIndex={0}
			disappearsOnIndex={-1}
		/>
	), []);

	return (
	<BottomSheetModal
		ref={ref}
		snapPoints={snapPoints}
		overDragResistanceFactor={0.3}
		backdropComponent={renderBackdrop}
		backgroundStyle={styles.modal}
		handleIndicatorStyle={{ display: "none" }}
	>
		<BottomSheetView style={styles.contentContainer}>
			<BottomSheetView style={styles.toggle}>
				<Pressable style={styles.toggleActive}>
					<Text style={styles.activeText}>Delivery</Text>
				</Pressable>

				<Pressable style={styles.toggleInactive}>
					<Text style={styles.inactiveText}>Pickup</Text>
				</Pressable>
			</BottomSheetView>

			<Pressable style={({pressed}) => [styles.button, pressed? styles.buttonOnPress : null]} onPress={() => {dismiss();}}>
				<Text style={styles.buttonText}>Confirm</Text>
			</Pressable>
		</BottomSheetView>
	</BottomSheetModal>
	);
});

export default BottomSheet;

const styles = StyleSheet.create({
	modal: {
		backgroundColor: Colors.lightGrey,

		borderRadius: 8,
	},

	contentContainer: {
		flex: 1,
	},

	toggle: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 20,

		marginBottom: 32,
	},

	toggleActive: {
		backgroundColor: Colors.primary,

		padding: 5,
		paddingHorizontal: 30,

		borderRadius: 32,
	},
	
	activeText: {
		color: "white",
		fontWeight: "bold",
	},

	toggleInactive: {
		padding: 5,
	},

	inactiveText: {
		color: Colors.primary,
	},

	button: {
		alignItems: "center",

		backgroundColor: Colors.primary,

		padding: 16,
		margin: 16,

		borderRadius: 4,
	},

	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},

	buttonOnPress: {
		opacity: 0.65,
	},
});