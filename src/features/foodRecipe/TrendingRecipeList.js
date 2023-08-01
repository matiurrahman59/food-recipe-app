import { View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import AvatarImage from '../../components/AvatarImage'
import Icon from '../../components/Icon'
import TextComponent from '../../components/TextComponent'
import { COLORS } from '../../../constants'
import Rating from '../../components/Rating'

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
				<TouchableOpacity
					onPress={() => navigation.navigate('RecipeDetails', item)}
					className="w-[280px] mr-4"
				>
					<View className="relative items-center justify-center">
						<AvatarImage
							url={item.image}
							resizeMode="contain"
							className="w-[280px] h-[180px] rounded-xl"
						/>
						<Rating rating={item.rating} />
						<Icon
							onPress={() => console.log('bookmark-item')}
							name="bookmark"
							size={22}
							className="absolute right-2 top-2 p-1.5 rounded-full"
							color={COLORS.neutral90}
							style={{
								backgroundColor: COLORS.white,
							}}
						/>
						<View
							className="px-2 py-1 rounded-lg absolute bottom-2 right-2"
							style={{
								backgroundColor: 'rgba(48, 48, 48, 0.30)',
							}}
						>
							<TextComponent
								type="base"
								additionalClassName="text-xs"
								customStyle={{ color: COLORS.white }}
							>
								{item.duration}
							</TextComponent>
						</View>
						<TouchableOpacity
							onPress={() => console.log('play video')}
							className="absolute h-12 w-12 items-center justify-center rounded-full"
							style={{
								backgroundColor: 'rgba(48, 48, 48, 0.30)',
							}}
						>
							<FontAwesome name="play" size={20} color={COLORS.white} />
						</TouchableOpacity>
					</View>
					<View className="flex-row justify-between items-center mt-3">
						<TextComponent type="h3">{item.title}</TextComponent>
						<Icon name="more-horizontal" size={20} color={COLORS.neutral90} />
					</View>
					<View className="flex-row items-center mt-2">
						<AvatarImage url={item.authorImage} className="h-8 w-8 mr-2" />
						<TextComponent type="sm" customStyle={{ color: COLORS.neutral40 }}>
							{item.author}
						</TextComponent>
					</View>
				</TouchableOpacity>
			)}
		/>
	)
}

export default TrendingRecipeList
