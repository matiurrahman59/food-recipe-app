import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

// internal imports
import OnboardingScreen from '../screens/OnboardingScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CreateRecipeScreen from '../screens/CreateRecipeScreen'
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import NotificationScreen from '../screens/NotificationScreen'
import { TabBarAdvancedButton } from '../components/TabBarAdvancedButton'
import { COLORS } from '../../constants'
import Icon from '../components/Icon'

const Stack = createStackNavigator()
const BottomBar = createBottomTabNavigator()

const createTabbedScreenOptions = () => {
	return {
		headerShown: false,
		headerStyle: {
			elevation: 0,
		},
		headerTitleAlign: 'center',

		tabBarStyle: {
			position: 'absolute',
			borderTopWidth: 0,
			elevation: 20,
		},

		tabBarShowLabel: false,
		tabBarActiveTintColor: COLORS.primary50,
		tabBarInactiveTintColor: COLORS.neutral30,
		tabBarHideOnKeyboard: 'true',
	}
}

const TabBar = () => {
	return (
		<BottomBar.Navigator screenOptions={createTabbedScreenOptions}>
			<BottomBar.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={24} color={color} />
					),
				}}
			/>
			<BottomBar.Screen
				name="Favorite"
				component={FavoriteScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="bookmark-minus-outline"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<BottomBar.Screen
				name="CreateRecipe"
				component={CreateRecipeScreen}
				options={{
					tabBarButton: props => (
						<TabBarAdvancedButton bgColor="#F6F7EB" {...props} />
					),
				}}
			/>
			<BottomBar.Screen
				name="Notification"
				component={NotificationScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name="bell" size={24} color={color} />
					),
				}}
			/>
			<BottomBar.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="user" size={24} color={color} />
					),
				}}
			/>
		</BottomBar.Navigator>
	)
}

export const Navigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					headerStyle: {
						elevation: 0,
					},
				}}
			>
				<Stack.Screen name="Onboarding" component={OnboardingScreen} />
				<Stack.Screen name="Tab" component={TabBar} />
				<Stack.Screen
					name="RecipeDetails"
					component={RecipeDetailsScreen}
					options={{
						headerShown: true,
						headerTitle: '',
						headerRight: () => (
							<Icon name="more-horizontal" size={24} className="mr-5" />
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
