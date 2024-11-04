import { useLayoutEffect, useRef, useState } from "react";
import { Image, Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import Colors from "@/constants/Colors";
import { restaurant } from "@/assets/data/restaurant";


function Details() {
	const navigation = useNavigation();
	const [activeIndex, setActiveIndex] = useState(0);

	const opacity = useSharedValue(0);
	const animatedStyles = useAnimatedStyle(() => ({
		opacity: opacity.value
	}));

	const scrollRef = useRef<ScrollView>(null);
	const itemsRef = useRef<View[]>([]);

	const DATA = restaurant.food.map((item, index) => ({
		title: item.category,
		data: item.meals,
		index,
	}));

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerTitle: "",
			headerTintColor: Colors.primary,
			headerLeft: () => (
				<Pressable onPress={() => navigation.goBack()} style={({pressed}) => [styles.roundButton, pressed ? styles.buttonOnPress : null]}>
					<Ionicons name="arrow-back-outline" size={24} color={Colors.primary} />
				</Pressable>
			),
			headerRight: () => (
				<View style={styles.bar}>
					<Pressable onPress={() => navigation.goBack()} style={({pressed}) => [styles.roundButton, pressed ? styles.buttonOnPress : null]}>
						<Ionicons name="share-outline" size={24} color={Colors.primary} />
					</Pressable>
					<Pressable onPress={() => navigation.goBack()} style={({pressed}) => [styles.roundButton, pressed ? styles.buttonOnPress : null]}>
						<Ionicons name="search-outline" size={24} color={Colors.primary} />
					</Pressable>
				</View>
			),
		});
	});

	function selectCategory(index: number) {
		setActiveIndex(index);

		const selected = itemsRef.current[index];
		selected.measure((x, y, width, height, pageX, pageY) => {
			scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
		});
	}

	function onScroll(event: any) {
		const y = event.nativeEvent.contentOffset.y;
		if (y > 350) {
			opacity.value = withTiming(1);
		} else {
			opacity.value = withTiming(0);
		}
	}

	return (
	<>
	<ParallaxScrollView
		style={styles.parallax}
		backgroundColor={"white"}
		scrollEvent={onScroll}
		parallaxHeaderHeight={250}
		stickyHeaderHeight={110}
		contentBackgroundColor={Colors.lightGrey}
		renderBackground={() => <Image source={restaurant.img} style={styles.image} />}
		renderStickyHeader={() => (
			<View style={styles.stickySection}>
				<Text style={styles.stickySectionText}>{restaurant.name}</Text>
			</View>
	)}>

		<View style={styles.detailsContainer}>
			<Text style={styles.restaurantName}>{restaurant.name}</Text>
			<Text style={styles.restaurantTags}>
				{restaurant.delivery} · {restaurant.tags.map((tag, index) => {
					return tag + (index !== restaurant.tags.length - 1 ? " · " : "");
				})}
			</Text>
			<Text style={styles.restaurantDescription}>{restaurant.about}</Text>

			<SectionList
				contentContainerStyle={styles.sectionList}
				sections={DATA}
				renderSectionHeader={({section: {title, index}}) => (
					<Text style={styles.sectionHeader}>{title}</Text>
				)}
				renderItem={({item, index}) => (
					<Link href={"/"} asChild key={index}>
						<View>
						<Pressable style={({pressed}) => [styles.sectionItem, pressed ? styles.buttonOnPress : null]}>
							<View style={{flex: 1}}>
								<Text style={styles.sectionItemDishText}>{item.name}</Text>
								<Text style={styles.sectionItemDishSubtext}>{item.info}</Text>
								<Text style={styles.sectionItemDishSubtext}>${item.price}</Text>
							</View>
							<Image source={item.img} style={styles.sectionItemImage} />
						</Pressable>
						</View>
					</Link>
				)}
				SectionSeparatorComponent={() => (
					<View style={styles.sectionSeparator}/>
				)}
				ItemSeparatorComponent={() => (
					<View style={styles.sectionSeparator}/>
				)}
				keyExtractor={(item, index) => item.name}
				scrollEnabled={false}
				/>
		</View>
	</ParallaxScrollView>

	<Animated.View style={[styles.stickySegments, animatedStyles]}>
		<View style={styles.stickySegmentsShadow}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 16, gap: 10, flex: 1, alignItems: "center" }}
			>
				{restaurant.food.map(({category}, index) => (
					<Pressable
						ref={ref => itemsRef.current[index] = ref!}
						style={({pressed}) => [activeIndex !== index ? styles.stickySegmentsItem : styles.stickySegmentsItemActive, pressed ? styles.buttonOnPress : null]} key={category}
						onPress={() => selectCategory(index)}
					>
						<Text style={activeIndex !== index ? styles.stickySegmentsItemText : styles.stickySegmentsItemTextActive}>{category}</Text>
					</Pressable>
				))}
			</ScrollView>
		</View>
	</Animated.View>
	</>
	);
}

export default Details;

const styles = StyleSheet.create({
	parallax: {
	},

	image: {
		width: "100%",
		height: "100%",
	},

	roundButton: {
		width: 40,
		height: 40,
		justifyContent:"center",
		alignItems: "center",
		
		backgroundColor: "white",
		
		marginLeft: 16,

		borderRadius: 20,
	},

	buttonOnPress: {
		opacity: 0.65,	
	},

	bar: {
		flexDirection: "row",
	},

	stickySection: {
		height: 105,
		justifyContent: "flex-end",

		marginLeft: 70,
	},

	stickySectionText: {
		color: "black",
		fontSize: 20,

		margin: 10,
	},

	stickySegments: {
		position: "absolute",
		top: 110,
		left: 0,
		right: 0,

		height: 40,
	},
	
	stickySegmentsShadow: {
		width: "100%",
		height: "100%",

		backgroundColor: "white",

		// elevation: 4,
		shadowColor: "black",
		shadowOffset: {width: 0, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 2,
	},

	stickySegmentsItem: {
		paddingHorizontal: 10,
		paddingVertical: 3,

		borderRadius: 50,
	},

	stickySegmentsItemActive: {
		backgroundColor: Colors.primary,

		paddingHorizontal: 10,
		paddingVertical: 3,

		borderRadius: 50,
	},

	stickySegmentsItemText: {
		color: Colors.primary,
		fontSize: 16,
	},

	stickySegmentsItemTextActive: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},

	detailsContainer: {},

	restaurantName: {
		fontSize: 30,

		margin: 16,
		marginBottom: 10,
	},

	restaurantTags: {
		color: Colors.medium,
		fontSize: 16,
		lineHeight: 22,

		margin: 16,
	},

	restaurantDescription: {
		color: Colors.mediumDark,
		fontSize: 16,

		margin: 16,
	},

	sectionList: {
		paddingBottom: 50,
	},

	sectionHeader: {
		fontSize: 22,
		fontWeight: "bold",

		marginTop: 40,
		margin: 16,
	},

	sectionItem: {
		flexDirection: "row",
		justifyContent: "space-between",

		backgroundColor: "white",

		paddingHorizontal: 16,
		paddingVertical: 8,
	},

	sectionItemDishText: {
		fontSize: 16,
		fontWeight: "bold",
	},

	sectionItemDishSubtext: {
		color: Colors.mediumDark,
		fontSize: 14,

		paddingVertical: 5,
	},

	sectionItemImage: {
		height: 80,
		width: 80,

		borderRadius: 4,
	},

	sectionSeparator: {
		height: 1,
		backgroundColor: Colors.grey,

		marginHorizontal: 12,
	}
});