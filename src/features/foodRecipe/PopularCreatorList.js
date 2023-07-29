import { View } from 'react-native'
import React from 'react'
import AvatarImage from '../../components/AvatarImage'
import TextComponent from '../../components/TextComponent'

const PopularCreatorList = ({ item }) => {
	return (
		<View key={item.id} className="mr-3">
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
		</View>
	)
}

export default PopularCreatorList
