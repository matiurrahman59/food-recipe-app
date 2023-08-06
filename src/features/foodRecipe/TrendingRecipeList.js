import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInRight } from 'react-native-reanimated'

// internal imports
import RecipeCard from '../../components/RecipeCard'

const TrendingRecipeList = ({ data }) => {
	const navigation = useNavigation()

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={data}
			contentContainerStyle={{
				paddingLeft: 20,
				marginBottom: 20,
			}}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<Animated.View
					entering={FadeInRight.duration(500).delay(item.id * 220)}
				>
					<RecipeCard
						item={item}
						className="w-[280px] mr-4"
						onPress={() => navigation.navigate('RecipeDetails', item)}
					/>
				</Animated.View>
			)}
		/>
	)
}

export default TrendingRecipeList
