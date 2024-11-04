import { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useSharedValue } from "react-native-reanimated";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
				<Pressable style={({pressed}) => [styles.toggleActive, pressed ? styles.buttonOnPress : null]}>
					<Text style={styles.activeText}>Delivery</Text>
				</Pressable>

				<Pressable style={({pressed}) => [styles.toggleInactive, pressed ? styles.buttonOnPress : null]}>
					<Text style={styles.inactiveText}>Pickup</Text>
				</Pressable>
			</BottomSheetView>

			<Text style={styles.subheader}>Your Location</Text>
			<Link href={"/modal/location-search"} asChild>
				<Pressable style={({pressed}) => [pressed ? styles.buttonOnPress : null]} onPress={() => dismiss()}>
					<BottomSheetView style={styles.item}>
						<Ionicons style={styles.itemIcon} name="location-outline" size={24} color={Colors.medium} />
						<Text style={styles.itemText}>Location</Text>
						<Ionicons style={styles.itemIcon} name="chevron-forward-outline" size={24} color={Colors.primary} />
					</BottomSheetView>
				</Pressable>
			</Link>
			
			<Text style={styles.subheader}>Arrival Time</Text>
			<Link href={"/"} asChild>
				<Pressable style={({pressed}) => [pressed ? styles.buttonOnPress : null]}>
					<BottomSheetView style={styles.item}>
						<Ionicons style={styles.itemIcon} name="stopwatch-outline" size={24} color={Colors.medium} />
						<Text style={styles.itemText}>Now</Text>
						<Ionicons style={styles.itemIcon} name="chevron-forward-outline" size={24} color={Colors.primary} />
					</BottomSheetView>
				</Pressable>
			</Link>

			<Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonOnPress : null]} onPress={() => {dismiss();}}>
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

	subheader: {
		fontSize: 16,
		fontWeight: "600",

		margin: 16,
	},

	item: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",

		backgroundColor: "white",

		padding: 10,

		borderTopWidth: 1,
		borderTopColor: Colors.grey,
		borderBottomWidth: 1,
		borderBottomColor: Colors.grey,
	},

	itemIcon: {
		marginHorizontal: 5,
	},

	itemText: {
		flex: 1,

		fontSize: 18,
		justifyContent: "center",
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