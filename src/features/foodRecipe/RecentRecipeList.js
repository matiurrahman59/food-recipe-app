import { FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

// internal imports
import AvatarImage from '../../components/AvatarImage'
import TextComponent from '../../components/TextComponent'
import { COLORS } from '../../../constants'
import Animated, { FadeInRight } from 'react-native-reanimated'

const RecentRecipeList = ({ data }) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={data}
			renderItem={({ item }) => (
				<Animated.View
					entering={FadeInRight.duration(500).delay(item.id * 280)}
				>
					<TouchableOpacity className="w-[124px] mr-4">
						<AvatarImage
							url={item.image}
							className="w-full h-[124px] rounded-xl"
						/>
						<TextComponent type="h4" additionalClassName="mt-2">
							{item.title}
						</TextComponent>
						<TextComponent
							type="sm"
							additionalClassName="mt-2"
							customStyle={{ color: COLORS.neutral40 }}
						>
							By {item.author}
						</TextComponent>
					</TouchableOpacity>
				</Animated.View>
			)}
			keyExtractor={item => item.id}
			contentContainerStyle={{
				paddingLeft: 20,
			}}
		/>
	)
}

export default RecentRecipeList
