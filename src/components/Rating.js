import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import TextComponent from './TextComponent'
import { COLORS } from '../../constants'

const Rating = ({ rating }) => {
	return (
		<View
			className="px-2 py-1 rounded-lg absolute top-2 left-2 flex-row items-center"
			style={{
				backgroundColor: 'rgba(48, 48, 48, 0.30)',
			}}
		>
			<FontAwesome name="star" size={12} color={COLORS.white} />
			<TextComponent
				type="h4"
				additionalClassName="text-xs ml-1"
				customStyle={{ color: COLORS.white }}
			>
				{rating}
			</TextComponent>
		</View>
	)
}

export default Rating
