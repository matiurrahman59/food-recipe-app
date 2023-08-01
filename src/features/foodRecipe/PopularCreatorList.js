import { FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import AvatarImage from '../../components/AvatarImage'
import TextComponent from '../../components/TextComponent'

const PopularCreatorList = ({ data }) => {
	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={data}
			renderItem={({ item }) => (
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
