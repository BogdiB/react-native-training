import { Pressable, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator, StackNavigationOptions, StackNavigationEventMap, TransitionPresets } from "@react-navigation/stack";
import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack, useNavigation, withLayoutContext } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import CustomHeader from '@/components/CustomHeader';
import Colors from '@/constants/Colors';

import 'react-native-gesture-handler';
import 'react-native-reanimated';


export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'index',
};

const { Navigator } = createStackNavigator();

const JsStack = withLayoutContext<StackNavigationOptions, typeof Navigator, StackNavigationState<ParamListBase>, StackNavigationEventMap>(Navigator);

export default function RootLayoutNav() {
	const navigation = useNavigation();

	function HeaderLeft() {
		return (
		<Pressable
			style={({pressed}) => pressed ? styles.buttonOnPress : null}
			onPress={() => navigation.goBack()}
		>
			<Ionicons name="close-outline" size={28} color={Colors.primary} />
		</Pressable>
		);
	}

	return (
	<GestureHandlerRootView>
		<BottomSheetModalProvider>
			<JsStack>
				<Stack.Screen
					name="index"
					options={{
						header: () => <CustomHeader />
					}}
				/>
				<JsStack.Screen
    				name="modal/filter"
    				options={{
      					...TransitionPresets.ModalPresentationIOS,
						title: "Filter",
      					presentation: "modal",
      					gestureEnabled: true,
						headerShadowVisible: false,
						headerStyle: {
							backgroundColor: Colors.lightGrey,
						},
						headerLeft: HeaderLeft,
    				}}
  				/>
				<Stack.Screen
    				name="modal/location-search"
    				options={{
						title: "Search location",
      					presentation: "fullScreenModal",
						headerStyle: {
							backgroundColor: Colors.lightGrey,
						},
						headerLeft: HeaderLeft,
    				}}
  				/>
			</JsStack>
		</BottomSheetModalProvider>
	</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	buttonOnPress: {
		opacity: 0.65,
	},
});