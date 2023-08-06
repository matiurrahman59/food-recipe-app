import { FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

// internal imports
import AvatarImage from '../../components/AvatarImage'
import TextComponent from '../../components/TextComponent'
import Animated, { FadeInRight } from 'react-native-reanimated'

const PopularCreatorList = ({ data }) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={data}
			renderItem={({ item }) => (
				<Animated.View
					entering={FadeInRight.duration(500).delay(item.id * 280)}
				>
					<TouchableOpacity className="mr-3">
						<AvatarImage
							url={item.image}
							className="h-[75px] w-[75px] rounded-full"
						/>
						<TextComponent
							type="h5"
							additionalClassName="max-w-[75px] text-center mt-2"
						>
							{item.name}
						</TextComponent>
					</TouchableOpacity>
				</Animated.View>
			)}
			keyExtractor={item => item.id}
			contentContainerStyle={{
				paddingLeft: 20,
				marginBottom: 20,
			}}
		/>
	)
}

export default PopularCreatorList
