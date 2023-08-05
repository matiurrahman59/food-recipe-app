import { FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import RecipeCard from '../../components/RecipeCard'

const TrendingRecipeList = ({ data }) => {
	const navigation = useNavigation()

	const onPress = item => {
		navigation.navigate('RecipeDetails', item)
	}

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
				<RecipeCard
					item={item}
					className="w-[280px] mr-4"
					onPress={() => onPress(item)}
				/>
			)}
		/>
	)
}

export default TrendingRecipeList
